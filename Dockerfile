FROM node:16.14-alpine

WORKDIR /build

COPY . .

RUN npm install

CMD ["npm", "start"]
