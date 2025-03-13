FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/ui/.next ./.next
COPY --from=builder /app/apps/ui/package.json .
RUN npm install --production
EXPOSE 12012
CMD ["npm", "start"]
