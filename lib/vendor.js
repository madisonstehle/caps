'use strict';

/** 
 *  @fileOverview vendor side of the application, emits a pickup and creates new orders
 *  @author       Madison Stehle
 * 
 *  @requires     NPM:faker
 *  @requires     /lib/events.js
 *  @requires     /lib/handlers.js
 */


const globalEmitter = require('./events.js');
const faker = require('faker');

const vendorThanks = require('./handlers.js').vendorThanksHandler;


globalEmitter.on('delivered', vendorThanks);

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

  globalEmitter.emit('pickup', order);
}, 5000);


