# Script
FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN yarn
RUN npm i -g serve
COPY . .
RUN yarn build
EXPOSE 5174
CMD [ "serve", "-s", "dist", "-p", "5174" ]

# Build
# docker build . -t db-erd-gen

# Run
# docker run -d -p 5174:5174 db-erd-gen:latest
# docker run -p 5174:5174 db-erd-gen:latest