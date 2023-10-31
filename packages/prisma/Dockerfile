FROM node:14

WORKDIR /usr/src/app

COPY package*.json /app
COPY tsconfig.json /app
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 3000