FROM node:16.13.0

ENV APP /usr/src/app/
WORKDIR $APP
COPY package.json package-lock.json $APP
RUN npm install
COPY . .

CMD [ "npm", "start" ]
