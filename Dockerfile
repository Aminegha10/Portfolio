# 1️⃣ Base image
FROM node:24-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# 4️⃣ Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run","dev"]

