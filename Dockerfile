FROM node:16-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 2000

CMD ["npm" , "start"]