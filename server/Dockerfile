ARG NODE_VERSION=20.12.2
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm ci
EXPOSE 3000
CMD npm start
