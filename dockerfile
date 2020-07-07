FROM node:12.18.2

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]