# Check out https://hub.docker.com/_/node to select a new base image
FROM node:12.14.0-alpine3.11 as builder
WORKDIR /sources
COPY . .
RUN npm ci --only=prod
# Clean node_modules
RUN npx modclean --no-progress --run


FROM node:12.14.0-alpine3.11

# Set to a non-root built-in user `node`
USER node
WORKDIR /home/node/app

COPY --from=builder --chown=node /sources/node_modules ./node_modules
COPY --from=builder --chown=node /sources/package.json ./package.json
COPY --from=builder --chown=node /sources/src ./src

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 8000

CMD [ "npm", "run", "start:prod" ]
