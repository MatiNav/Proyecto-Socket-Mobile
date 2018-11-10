const socketIO = require('socket.io');

let io;

/**
 * Maneja el escuchar el canal 'addMenu'
 * @param {*} socket
 */
function listenAddOrder(socket) {
  socket.on('addMenu', menu => {
    socket.emit('menuChanges', menu);

    console.log('El menú fuen enviado', JSON.stringify(menu, undefined, 2));
  });
}

/**
 * Inicia el socket
 * @param {*} server
 */
function initSocket(server) {
  io = socketIO(server);
  io.on('connection', socket => {
    console.log('new user connected');

    listenAddOrder(socket);
  });
}

module.exports = {
  initSocket
};
