'use strict';

/** 
 *  @fileOverview event handler functions
 *  @author       Madison Stehle
 */



/**
 * Logs the new order details to the console
 * @param   {object} payload
 */
const pickupOrderLogger = (payload) => {
  if (payload) {
    console.log('EVENT pickup');
    console.log(`\t - Time: ${payload.time}`);
    console.log(`\t - Store: ${payload.store}`);
    console.log(`\t - OrderID: ${payload.orderID}`);
    console.log(`\t - Customer: ${payload.customer}`);
    console.log(`\t - Address: ${payload.address}`);
    return true;
  } else {
    return false;
  }
}

/**
 * Logs that the driver picked up the order
 * @param   {object} payload
 */
const driverPickUpHandler = (payload) => {
  if (payload) {
    console.log(`DRIVER picked up order ${payload.orderID}`);
    return true;
  } else {
    return false;
  }
}

/**
 * Logs that the order is in transit
 * @param   {object} payload
 */
const inTransitHandler = (payload) => {
  if (payload) {
    console.log(`EVENT in-transit order ${payload.orderID}`);
    return true;
  } else {
    return false;
  }
}

/**
 * Logs that the driver delivered the order
 * @param   {object} payload
 */
const driverDelivered = (payload) => {
  if (payload) {
    console.log(`DRIVER delivered order ${payload.orderID}`);
    return true;
  } else {
    return false
  }
}

/**
 * Logs a thank you message from the vendor for delivering the order
 * @param   {object} payload
 */
const vendorThanksHandler = (payload) => {
  if (payload) {
    console.log(`VENDOR Thank you for delivering order ${payload.orderID}`);
    return true;
  } else {
    return false;
  }
}

/**
 * Logs that the order has been successfully delivered
 * @param   {object} payload
 */
const endEventDelivered = (payload) => {
  if (payload) {
    console.log(`EVENT delivered order ${payload.orderID}`);
    console.log('=============================')
    return true;
  } else {
    return false;
  }
}

/** @exports {object} Handler Functions */
module.exports = {
  pickupOrderLogger,
  driverPickUpHandler,
  inTransitHandler,
  driverDelivered,
  vendorThanksHandler,
  endEventDelivered
};
