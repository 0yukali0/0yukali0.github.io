FROM node:20.17.0-alpine3.20
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "run", "serve"]
