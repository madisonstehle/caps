'use strict';

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

module.exports = {
  pickupOrderLogger,
  inTransitHandler,
  endEventDelivered
}