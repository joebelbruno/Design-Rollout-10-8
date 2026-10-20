FROM node:22-alpine
WORKDIR /app
COPY server.js ./server.js
COPY channel/index.html ./channel/index.html
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
