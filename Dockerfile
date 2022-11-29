FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY src/ ./

EXPOSE 5000

CMD ["node", "index.js"]
