const express = require('express');
const http = require('http');

const socketSrvc = require('../server/socket/socket');

const app = express();

const server = http.createServer(app);

socketSrvc.initSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
