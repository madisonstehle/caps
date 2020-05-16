'use strict';

const faker = require('faker');

const io = require('socket.io-client');

const flowerSocket = io.connect('http://localhost:3000/csps');
const candySocket = io.connect('http://localhost:3000/csps');

flowerSocket.emit('join', 'flower-shop');
candySocket.emit('join', 'candy-shop');

/**
 * Logs a thank you message from the vendor for delivering the order
 * @param   {object} payload
 */
const thankYou = (payload) => {
  console.log(`${payload.store}: Thank you for delivering order ${payload.orderID}`);
}


flowerSocket.on('delivered', thankYou);
candySocket.on('delivered', thankYou);


/**
 * creates a new FLOWER order and emits a pickup every 5 seconds
 */
setInterval(() => {
  let order = {
    time: faker.date.future(),
    store: 'flower-shop',
    orderID: faker.random.number(),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr()
  };
  
  flowerSocket.emit('pickup', order);
}, 5000);

/**
 * creates a new CANDY order and emits a pickup every 5 seconds
 */
setInterval(() => {
  setInterval(() => {
    let order = {
      time: faker.date.future(),
      store: 'candy-shop',
      orderID: faker.random.number(),
      customer: faker.name.firstName() + ' ' + faker.name.lastName(),
      address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr()
    };
    
    candySocket.emit('pickup', order);
  }, 5000);
}, 3000);

