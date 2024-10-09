FROM node:16.13-alpine

WORKDIR /app

COPY remitsafe/frontend/package*.json ./

RUN npm install --legacy-peer-deps

COPY ./remitsafe/frontend/ ./

EXPOSE 8001/tcp

CMD npm run start
