#FROM node:lts-buster-slim as BUILDER
FROM node:17.3.0-buster as BUILDER

WORKDIR /app
COPY package.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install

#RUN apt update && apt install python2 build-essential -y && npm ci

#RUN apk update && apk add python2 alpine-sdk && npm ci
#RUN apk add g++ make python2 && npm install

#RUN apk add --no-cache --virtual .gyp \
#        python2 \
#        make \
#        gcc \
#        g++ \
#        && npm ci \
#        && apk del .gyp

COPY . .
RUN npm run build


FROM casual/middleware:1.6-beta


COPY --from=BUILDER /app/dist/ /opt/casual/nginx/html/
COPY --from=BUILDER /app/example/configuration/domain.yaml /test/casual/configuration/domain.yaml


