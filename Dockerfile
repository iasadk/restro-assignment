# ---------- BUILD ----------
FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# ---------- RUN ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app ./

EXPOSE 5800

CMD ["pnpm", "start"]
