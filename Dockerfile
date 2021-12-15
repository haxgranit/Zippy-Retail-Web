FROM node:14.18-alpine AS install
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM install AS build
RUN npm run build

FROM nginx:1.21.3-alpine
COPY .htpasswd /etc/apache2/
COPY default.conf.template /etc/nginx/templates/
COPY docker-config.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/docker-config.sh
COPY --from=build /app/build /usr/share/nginx/html
ENV NGINX_AUTH_BASIC=off