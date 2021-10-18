FROM node:lts-alpine AS app
WORKDIR /var/app

ARG NODE_ENV=production
ENV NODE_ENV=production

RUN yarn install --frozen-lockfile && yarn cache clean

RUN adduser -S app
USER app

ENTRYPOINT ["/var/app/init.sh"]