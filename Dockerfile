FROM node

RUN apt-get update

WORKDIR /app

COPY . .

RUN cd Story_Downloader_Frontend && npm i && npm run build

RUN cd ..

RUN cd Story_Downloader_Backend && npm i

ENTRYPOINT [ "node Story_Downloader_Backend/server/index.js" ]