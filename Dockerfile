FROM node:alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY ./ ./

ENV NODE_ENV production

CMD ["npm", "run", "start"]