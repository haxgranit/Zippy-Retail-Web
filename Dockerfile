FROM nginx:1.21.1-alpine
COPY dist /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/
COPY .htpasswd /etc/apache2/
ENV NGINX_AUTH_BASIC=off