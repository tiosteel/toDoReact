FROM node:12.14.1

WORKDIR /var/app/frontend

COPY ./package*.json yarn.lock ./
RUN yarn

ENV PATH /var/app/frontend/node_modules/.bin:$PATH

ADD . /var/app/frontend/www
WORKDIR /var/app/frontend/www

EXPOSE 3000

#RUN yarn build
CMD yarn start
