# Run

1. Rename .env.example to .env (root folder). Change values if needed. Possible values for APP_ENV: local, staging, production
2. Run
`docker-compose -f "docker-compose.yml" up -d --build`

`php artisan migrate --seed --force` will be executed automatically
