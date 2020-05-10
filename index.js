'use strict';

/** 
 *  @fileOverview entry point for app
 *  @author       Madison Stehle
 * 
 *  @requires     /lib/events.js
 *  @requires     /lib/handlers.js
 *  @requires     /lib/driver.js
 *  @requires     /lib/vendor.js
 */

const globalEmitter = require('./lib/events.js');

const logPickup = require('./lib/handlers.js').pickupOrderLogger;
const logInTransit = require('./lib/handlers.js').inTransitHandler;
const endEvent = require('./lib/handlers.js').endEventDelivered;

globalEmitter.on('pickup', logPickup);

require('./lib/driver.js');
require('./lib/vendor.js');

globalEmitter.on('in-transit',  logInTransit);
globalEmitter.on('delivered', endEvent);
