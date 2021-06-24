FROM node:lts-alpine

# Create app directory
RUN mkdir -p /home/ingadi/web/node_modules && chown -R node:node /home/ingadi/web
WORKDIR /home/ingadi/web

COPY package.json package-lock.json ./
USER node
RUN npm add

COPY --chown=node:node . .

EXPOSE 3000
CMD ["npm", "run", "start"]