# 1️⃣ Base image for building
FROM node:24-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the Next.js app
RUN npm run build

# 2️⃣ Production image
FROM node:24-alpine AS runner

WORKDIR /app

# Copy only required files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

# Use production mode
# ENV NODE_ENV=production

# Start Next.js
CMD ["npm", "run", "dev"]

