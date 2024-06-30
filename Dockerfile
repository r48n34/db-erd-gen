FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
RUN npm i -g serve
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]