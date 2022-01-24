# Run

1. Rename .env.example to .env (root folder). Change values if needed. Possible values for APP_ENV: local, staging, production
2. Run
   `docker-compose -f "docker-compose.yml" up -d --build`

`php artisan migrate --seed --force` will be executed automatically 

3. Launch

- http://localhost:8000 - frontend
- http://localhost:8001 - API
- http://localhost:8002 - phpmyadmin (see the credentials in the docker-compose.yml)
