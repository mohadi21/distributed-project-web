# stage 1 build image
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#RUN chmod 775 app/node_modules/.bin/ng

#RUN chmod 775 app/node_modules/.bin/ng.cmd
# stage 2 run the app nginx optimize the runing
FROM nginx:alpine
COPY --from=node /app/dist/angular-bookstore /usr/share/nginx/html