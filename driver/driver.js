'use strict';

const sio = require('socket.io-client');
const driverSocket = sio.connect('http://localhost:3000/csps');

driverSocket.emit('join', 'driver');

/**
 * Logs that the driver picked up the order, emits in-transit and delivered, logs delivered
 * @param   {object} payload
 */
const driverActions = (payload) => {
  console.log(`DRIVER picked up order ${payload.orderID}`);
  
  setTimeout(() => {
    driverSocket.emit('in-transit', payload);
    
    setTimeout(() => {
      driverSocket.emit('delivered', payload);
      console.log(`DRIVER delivered order ${payload.orderID}`);
    }, 3000);
    
  }, 1000);
}

driverSocket.on('pickup', driverActions);
