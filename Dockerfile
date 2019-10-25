FROM node:alpine AS base
RUN mkdir /app
RUN addgroup -g 1001 -S app && \
  adduser -u 1001 -S app -G app && \
  chown -R app:app /app && \
  chmod 770 /app
USER app:app
WORKDIR /app
COPY --chown=app:app package.json package-lock.json ./

FROM base AS dependencies
RUN npm set progress=false && \
  npm config set depth 0 && \
  npm ci

FROM dependencies AS build
COPY --chown=app:app public ./public
COPY --chown=app:app src ./src
COPY --chown=app:app tsconfig.json .
RUN npm run build

FROM nginx:alpine
#the only reason why we need gettext here, is that we have use envsubst in entrypoint to add env.json file
RUN apk add --no-cache gettext
RUN mkdir /app
RUN addgroup -g 1001 -S app && \
  adduser -u 1001 -S app -G app && \
  chown -R app:app /app && \
  chown -R app:app /var/cache/nginx && \
  touch /var/run/nginx.pid && \
  chown -R app:app /var/run/nginx.pid && \
  chmod 770 /app
USER app:app
WORKDIR /app
COPY --chown=app:app nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=app:app --from=build /app/build ./
COPY --chown=app:app entrypoint.sh config.template.js ./
RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 3000