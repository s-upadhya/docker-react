FROM node:alpine
WORKDIR '/app'
# rebuild only if we change package.json
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]