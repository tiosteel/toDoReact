FROM node:12.14.1

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm set strict-ssl false && npm install -g npm  && npm install
COPY . .

CMD [ "node", "inspect", "server.js" ]
