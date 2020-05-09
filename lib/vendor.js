'use strict';

const globalEmitter = require('./events.js');
const faker = require('faker');

const vendorThanks = require('./handlers.js').vendorThanksHandler;


globalEmitter.on('delivered', vendorThanks);

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


