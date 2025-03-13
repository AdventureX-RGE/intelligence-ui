FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install pnpm -g
RUN pnpm install
RUN pnpm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/ui/.next ./.next
COPY --from=builder /app/apps/ui/public ./public
COPY --from=builder /app/apps/ui/package.json .
COPY --from=builder /app/apps/ui/next.config.js .
COPY --from=builder /app/apps/ui/.npmrc .
RUN npm install pnpm -g
RUN pnpm install --prod
EXPOSE 3000
CMD ["pnpm", "start"]
