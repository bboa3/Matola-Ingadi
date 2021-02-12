FROM node:lts-alpine

# Create app directory
RUN mkdir -p /home/ingadi/server/node_modules && chown -R node:node /home/ingadi/server
WORKDIR /home/ingadi/server

COPY package.json yarn.* ./
USER node
RUN yarn

COPY --chown=node:node . .

EXPOSE 3003
CMD ["yarn", "prod"]