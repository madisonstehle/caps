'use strict';

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

module.exports = vendorThanksHandler;