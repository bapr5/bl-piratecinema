FROM node:23-alpine
EXPOSE 3001
WORKDIR /app
COPY ./app /app
RUN npm install
CMD ["node", "index.mjs"]
