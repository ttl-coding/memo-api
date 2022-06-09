FROM node:16.13.0

ENV APP /app
WORKDIR $APP
COPY package.json package-lock.json $APP
RUN npm install
COPY . .

CMD [ "npm", "start" ]
