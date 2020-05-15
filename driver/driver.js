'use strict';

const handlers = require('./driverHandlers.js');

const net = require('net');
const socket = new net.Socket();

socket.connect({port: 3000, host: 'localhost'}, () => {
  console.log('socket connected to server on port 3000')
});

socket.on('data', handlers.driverPickUpHandler);
