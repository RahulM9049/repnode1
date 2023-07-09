FROM node

WORKDIR /src
COPY . .

EXPOSE 3001

CMD node myserver.js


