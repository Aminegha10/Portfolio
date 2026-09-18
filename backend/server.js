import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 4000);
const ollamaUrl = process.env.OLLAMA_URL || "http://localhost:11434";
const ollamaModel = process.env.OLLAMA_MODEL || "llama3.2:1b";
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:3000";
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const companyFilePath = path.join(currentDirectory, "data", "company.txt");

app.use(helmet());
app.use(cors({ origin: frontendOrigin }));
app.use(express.json({ limit: "10kb" }));

const chatRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again later." },
});

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.post("/api/chat", chatRateLimit, async (request, response) => {
  try {
    const message = typeof request.body?.message === "string"
      ? request.body.message.trim()
      : "";

    if (!message) {
      return response.status(400).json({ error: "Please enter a message." });
    }

    const companyInfo = await readFile(companyFilePath, "utf8");
    const prompt = `You are the AI assistant on Amine's portfolio website.

Use ONLY the information provided in the PORTFOLIO INFORMATION section.

PORTFOLIO INFORMATION:
${companyInfo}

USER QUESTION:
${message}

RULES:
- Answer naturally and concisely.
- Use the provided portfolio information.
- Do not invent information.
- If the information is not available, say that you don't have that information.
- Do not pretend to know something that isn't in the provided information.`;

    const ollamaResponse = await fetch(`${ollamaUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ollamaModel, prompt, stream: false }),
    });

    if (!ollamaResponse.ok) {
      console.error("Ollama returned an error:", ollamaResponse.status);
      return response.status(503).json({
        error: "The AI assistant is currently unavailable.",
      });
    }

    const data = await ollamaResponse.json();
    const reply = typeof data.response === "string" ? data.response.trim() : "";

    if (!reply) {
      console.error("Ollama returned an empty response.");
      return response.status(503).json({
        error: "The AI assistant is currently unavailable.",
      });
    }

    return response.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return response.status(503).json({
      error: "The AI assistant is currently unavailable.",
    });
  }
});

app.listen(port, () => {
  console.log(`Chat backend listening on http://localhost:${port}`);
});
