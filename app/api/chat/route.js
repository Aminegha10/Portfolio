import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const OLLAMA_URL = "http://localhost:11434/api/generate";
const MODEL = "llama3.2:1b";

export async function POST(request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    const companyInfo = await readFile(
      path.join(process.cwd(), "backend", "data", "company.txt"),
      "utf8"
    );

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

    const ollamaResponse = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: MODEL, prompt, stream: false }),
    });

    if (!ollamaResponse.ok) {
      console.error("Ollama returned an error:", ollamaResponse.status);
      return NextResponse.json(
        { error: "The AI assistant is currently unavailable." },
        { status: 503 }
      );
    }

    const data = await ollamaResponse.json();
    const reply = typeof data.response === "string" ? data.response.trim() : "";

    if (!reply) {
      console.error("Ollama returned an empty response.");
      return NextResponse.json(
        { error: "The AI assistant is currently unavailable." },
        { status: 503 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "The AI assistant is currently unavailable." },
      { status: 503 }
    );
  }
}
