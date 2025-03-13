FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install pnpm -g
RUN pnpm install
RUN pnpm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/ui/.next ./.next
COPY --from=builder /app/apps/ui/package.json .
RUN npm install
EXPOSE 12012
CMD ["npm", "start"]
