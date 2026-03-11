# ---------- BUILD ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -f package-lock.json && npm install

COPY . .

RUN npm run build

# ---------- RUN ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8500

CMD ["node", "server.js"]

