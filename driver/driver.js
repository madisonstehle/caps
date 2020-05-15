'use strict';

const net = require('net');
const socket = new net.Socket();

socket.connect({port: 3000, host: 'localhost'}, () => {
  console.log('DRIVER socket connected to server on port 3000');
});

socket.on('data', (payload) => {
  let parsedPayload = JSON.parse(payload.toString());

  switch (parsedPayload.event) {
    case 'pickup':
      setTimeout( () => {
        let nextOrderStep = { event: 'in-transit', order: parsedPayload.order };
        console.log(`DRIVER picked up order ${parsedPayload.order.orderID}`);
        socket.write(JSON.stringify(nextOrderStep));
      }, 1000);
      break;
    case 'in-transit':
      setTimeout( () => {
        let deliveredOrder = { event: 'delivered', order: parsedPayload.order };
        console.log(`DRIVER delivered order ${parsedPayload.order.orderID}`);
        socket.write(JSON.stringify(deliveredOrder));
      }, 3000);
      break;
  }
});
