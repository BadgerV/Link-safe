FROM node:16.13-alpine

WORKDIR /app

COPY remitflex/frontend/package*.json ./

RUN npm install --legacy-peer-deps

COPY ./remitflex/frontend/ ./

EXPOSE 8001/tcp

CMD npm run start
