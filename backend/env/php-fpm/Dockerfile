FROM php:8.0.3-fpm-alpine3.13

ARG APP_ENV="production"

COPY "./php.ini-$APP_ENV" "$PHP_INI_DIR/php.ini"

COPY ./.env ./

RUN apk --no-cache add pcre-dev ${PHPIZE_DEPS} \ 
  && pecl install xdebug-3.0.3 \
  && docker-php-ext-install mysqli pdo pdo_mysql \
  && docker-php-ext-enable xdebug \
  && apk del pcre-dev ${PHPIZE_DEPS}

COPY ./php-fpm-entrypoint.sh /usr/local/bin/php-fpm-entrypoint.sh
ENTRYPOINT [ "php-fpm-entrypoint.sh" ]

STOPSIGNAL SIGQUIT
CMD ["php-fpm"]