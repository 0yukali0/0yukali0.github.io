FROM node:20.17.0-alpine3.20
COPY . .
RUN npm ci && npm run build
ENTRYPOINT ["npm", "run", "serve"]
