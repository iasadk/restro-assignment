# ---------- BUILD ----------
FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare npm@latest --activate

COPY package.json npm-lock.yaml ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm build

# ---------- RUN ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable && corepack prepare npm@latest --activate

COPY --from=builder /app ./

EXPOSE 5800

CMD ["npm", "start"]
