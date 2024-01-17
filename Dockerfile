FROM node:16.14-alpine

WORKDIR /

COPY . .

RUN npm install

CMD ["npm", "start"]
