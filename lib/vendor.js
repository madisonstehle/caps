'use strict';

const globalEmitter = require('./events.js')
const faker = require('faker');

// This file should generate a new customer order every 5 seconds. You can utilize the faker npm package to generate random order data. When a new customer order is generated, a pickup event should emit, and a payload should be sent out with the full order data.

//- Time: 05/07/2020 1:30 PM
//- Store: My Flower Shop
//- OrderID: 1
//- Customer: Billy Biggs
//- Address: 123 Main Street, New York, NY 

// The vendor should also listen for the delivered event, and when emitted it should log a thank you message to the console, showing the ID of the order that was delivered.

setInterval(() => {

  let order = {
    time: faker.date.future(),
    store: faker.company.companyName(),
    orderID: faker.random.number(),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr()
  };

  globalEmitter.emit('pickup', order);
}, 5000);
