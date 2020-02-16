FROM php:7.4.1-fpm

WORKDIR /var/app/backend

RUN pecl install xdebug-2.9.1 \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && docker-php-ext-enable xdebug
