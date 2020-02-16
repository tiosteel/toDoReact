FROM php:7.4.1-cli

RUN pecl install xdebug-2.9.1 \
    && docker-php-ext-enable xdebug

WORKDIR /var/app/backend