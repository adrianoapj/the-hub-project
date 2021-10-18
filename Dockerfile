FROM node:lts-alpine AS app
WORKDIR /var/app

COPY package.json /var/app

RUN yarn install

COPY . /var/app

CMD node src/app.js

EXPOSE 3333