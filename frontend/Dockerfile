# Stage 1

FROM node:alpine3.16 as build

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

# Stage 2

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]