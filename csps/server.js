'use strict';

const net = require('net');
const server = net.createServer();

let socketPool = [];
let PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

server.on('connection', (socket) => {

});