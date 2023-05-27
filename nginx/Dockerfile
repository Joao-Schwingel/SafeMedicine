FROM nginx:latest
# NGINX Default conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]