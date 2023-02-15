FROM nginx:1.20.1

ENV TZ=Asia/Shanghai

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone 

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist /usr/share/nginx/html
