'use strict';

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