const socketIO = require('socket.io');

let io;
const menuList = [];

/**
 * Maneja el escuchar el canal 'addMenu'
 * @param {*} socket
 */
function listenAddOrder(socket) {
  socket.on('addMenu', menu => {
    menuList.push(menu);
    io.emit('menuChanges', menuList);

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
