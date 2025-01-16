FROM node:22

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5000

ENV SERVER_PORT=5000

CMD ["node", "app.js"]
