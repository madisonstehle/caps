'use strict';

/** 
 *  @fileOverview driver side of the application, picks up the order and delivers it, emitting transit and delivered events
 *  @author       Madison Stehle
 * 
 *  @requires     /lib/events.js
 *  @requires     /lib/handlers.js
 */

const globalEmitter = require('./events.js');

const driverPickup = require('./handlers.js').driverPickUpHandler;
const driverDelivered = require('./handlers.js').driverDelivered;

/**
 * Emits an in-transit event, then emits a delivered event after 3 seconds
 * @param   {object} payload
 */
const doTheDelivery = (payload) => {
  globalEmitter.emit('in-transit', payload);

  setTimeout( () => {
    globalEmitter.emit('delivered', payload);
  }, 3000);
}


globalEmitter.on('pickup', driverPickup);
globalEmitter.on('pickup', doTheDelivery);
globalEmitter.on('delivered', driverDelivered);

