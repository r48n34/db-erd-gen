# Script
FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN yarn
RUN npm i -g serve
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]

# Build
# docker build . -t db-erd-gen

# Run
# docker run -p 3000:3000 db-erd-gen:latest