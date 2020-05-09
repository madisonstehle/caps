'use strict';

const globalEmitter = require('./events.js');

const driverPickup = require('./handlers.js').driverPickUpHandler;
const driverDelivered = require('./handlers.js').driverDelivered;

const doTheDelivery = (payload) => {
  globalEmitter.emit('in-transit', payload);

  setTimeout( () => {
    globalEmitter.emit('delivered', payload);
  }, 3000);
}


globalEmitter.on('pickup', driverPickup);
globalEmitter.on('pickup', doTheDelivery);
globalEmitter.on('delivered', driverDelivered);

