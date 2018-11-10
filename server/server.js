const express = require('express');
const http = require('http');
const path = require('path');
const socketSrvc = require('../server/socket/socket');

const app = express();

const server = http.createServer(app);

socketSrvc.initSocket(server);

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
