FROM node:carbon-slim
WORKDIR /app
COPY . /app
RUN npm install
CMD npm run start-server
