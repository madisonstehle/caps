'use strict';

const net = require('net');
const socket = new net.Socket();

const faker = require('faker');

socket.connect({port: 3000, host: 'localhost'}, () => {
  console.log('socket connected to server on port 3000')
});

socket.on('data', (payload) => {
  let parsedPayload = JSON.parse(payload.toString());

  if (parsedPayload.event === 'delivered') {
    console.log(`VENDOR Thank you for delivering order ${parsedPayload.order.orderID}`);  }
})

/**
 * creates a new order and emits a pickup every 5 seconds
 */
setInterval(() => {
  let order = {
    time: faker.date.future(),
    store: faker.company.companyName(),
    orderID: faker.random.number(),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr()
  };

  socket.write( JSON.stringify({ event: 'pickup', order: order }) );
}, 5000);
