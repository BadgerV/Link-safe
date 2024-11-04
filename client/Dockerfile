FROM node:16.13-alpine

WORKDIR /app

COPY client/package*.json ./

RUN npm install --legacy-peer-deps

COPY ./client/ ./

EXPOSE 3000/tcp

CMD npm run start