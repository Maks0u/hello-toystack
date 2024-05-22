FROM nginx:1.26-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY custom.conf /etc/nginx/conf.d/custom.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY static /usr/share/nginx/html
