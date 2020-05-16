'use strict';

const sio = require('socket.io')(3000);

const cspsIO = sio.of('/csps');

cspsIO.on('connection', (socket) => {
  console.log(`socket ${socket.id} joined the party!`);

  socket.on('join', (room) => {
    socket.join(room);
  })

  socket.on('pickup', pickupOrderLogger);

  socket.on('in-transit', inTransitHandler);

  socket.on('delivered', endEventDelivered)
});

const pickupOrderLogger = (payload) => {
  console.log('EVENT pickup');
  console.log(`\t - Time: ${payload.time}`);
  console.log(`\t - Store: ${payload.store}`);
  console.log(`\t - OrderID: ${payload.orderID}`);
  console.log(`\t - Customer: ${payload.customer}`);
  console.log(`\t - Address: ${payload.address}`);

  cspsIO.to('driver').emit('pickup', payload);
}

const inTransitHandler = (payload) => {
  console.log(`EVENT in-transit order ${payload.orderID}`);
}

const endEventDelivered = (payload) => {
  console.log(`EVENT delivered order ${payload.orderID}`);
  cspsIO.to(payload.store).emit('delivered', payload);
}
