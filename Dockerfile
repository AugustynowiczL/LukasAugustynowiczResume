# --- Build stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy lock + package files
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm ci

# Copy the rest of the code
COPY . .

# Build Next.js
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000
ENV HOST=0.0.0.0

# Copy standalone build and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./public/.next/static
COPY --from=builder /app/public ./public

EXPOSE 4000

# Start the app
CMD ["node", "server.js"]
