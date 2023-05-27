FROM node:14.20.1 AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["node", "./dist/server.js"]