FROM node:18


WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 3000