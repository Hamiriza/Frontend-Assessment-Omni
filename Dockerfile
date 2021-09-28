FROM node:16.10.0-alpine3.14
RUN apk update --no-cache
RUN apk upgrade --no-cache
RUN npm install -g json-server
WORKDIR /app
ENTRYPOINT [ \
  "json-server", \
  "--host", "0.0.0.0", \
  "--port", "8080", \
  "--routes", "routes.json", \
  "--watch", \
  "/app/server.json" \
  ]
