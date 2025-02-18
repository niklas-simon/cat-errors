FROM --platform=$BUILDPLATFORM node:alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

FROM node:alpine

WORKDIR /app

COPY index.html index.js ./
COPY --from=deps /app/node_modules ./node_modules

ENTRYPOINT [ "node", "index.js" ]