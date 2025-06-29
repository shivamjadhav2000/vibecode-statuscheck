FROM node:18-alpine

WORKDIR /app/backend

COPY backend/package.json backend/package-lock.json* ./
RUN npm install

COPY backend/ ./
COPY public/ ../public/

EXPOSE 3000

CMD ["node", "index.js"]
