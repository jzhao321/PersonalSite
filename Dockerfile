FROM node:10.9.0-alpine
RUN mkdir -p /home/node/IsoApp && chown -R node:node /home/node
USER node
WORKDIR /home/node/IsoApp
COPY ./package.json ./
RUN npm install --only=prod
COPY ./lib ./lib
COPY ./static ./static
EXPOSE 3000
CMD ["node", "./lib"]