FROM node:17-alpine3.12
WORKDIR /home/node/app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]