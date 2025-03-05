FROM node:22.14.0-alpine3.20

WORKDIR ./

RUN npm install

EXPOSE  3000

CMD ["npm", "run", "dev"]
