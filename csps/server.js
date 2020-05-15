'use strict';

const net = require('net');
const server = net.createServer();

let socketPool = [];
let PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

const cspsLogger = (payload) => {
  let parsedPayload = JSON.parse(payload.toString());

  for ( let i = 0 ; i < socketPool.length ; i++) {
    let socket = socketPool[i];
    socket.write(payload);
  };

  switch (parsedPayload.event){
    case 'pickup':
      console.log('EVENT pickup');
      console.log(`\t - Time: ${parsedPayload.order.time}`);
      console.log(`\t - Store: ${parsedPayload.order.store}`);
      console.log(`\t - OrderID: ${parsedPayload.order.orderID}`);
      console.log(`\t - Customer: ${parsedPayload.order.customer}`);
      console.log(`\t - Address: ${parsedPayload.order.address}`);
      break;
    case 'in-transit':
      console.log(`EVENT in-transit order ${parsedPayload.order.orderID}`);
      break;
    case 'delivered':
      console.log(`EVENT delivered order ${parsedPayload.order.orderID}`);
      console.log('=============================');
      break;
  }

  // if (parsedPayload.event === 'pickup') {
  // }

  
}

server.on('connection', (socket) => {
  console.log('Hey! A socket connected to me!');
  socketPool.push(socket);
  socket.on('data', cspsLogger);
});