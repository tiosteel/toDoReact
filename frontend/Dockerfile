FROM node:12.14.1

WORKDIR /var/www/frontend
COPY ./package*.json ./
RUN npm set strict-ssl false && npm install -g npm  && npm install
COPY ./ ./

EXPOSE 80

CMD [ "node", "server.js" ]
