FROM php:8.0.3-fpm-alpine3.13

WORKDIR /var/app/backend

RUN apk --no-cache add pcre-dev ${PHPIZE_DEPS} \ 
  && pecl install xdebug-3.0.3 \
  && docker-php-ext-install mysqli pdo pdo_mysql \
  && docker-php-ext-enable xdebug \
  && apk del pcre-dev ${PHPIZE_DEPS}

# COPY docker-php-entrypoint.sh ./
# RUN ["chmod", "+x", "./docker-php-entrypoint.sh"]
# ENTRYPOINT ./docker-php-entrypoint.sh