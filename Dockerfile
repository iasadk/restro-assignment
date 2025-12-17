# ---------- BUILD ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build Next.js + Payload
RUN npm run build

# ---------- RUN ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install runtime dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy built files
COPY --from=builder /app ./

EXPOSE 3000

# Start app
CMD ["npm", "run", "start"]
