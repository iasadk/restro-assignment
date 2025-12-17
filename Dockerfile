# ---------- BUILD ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy rest of project
COPY . .

# Build Next.js + Payload
RUN npm run build

# ---------- RUN ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install production deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built files
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
