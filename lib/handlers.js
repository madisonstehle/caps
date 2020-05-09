'use strict';


const pickupOrderLogger = (payload) => {
  console.log('EVENT pickup');
  console.log(`\t - Time: ${payload.time}`);
  console.log(`\t - Store: ${payload.store}`);
  console.log(`\t - OrderID: ${payload.orderID}`);
  console.log(`\t - Customer: ${payload.customer}`);
  console.log(`\t - Address: ${payload.address}`);
}

const driverPickUpHandler = (payload) => {
  console.log(`DRIVER picked up order ${payload.orderID}`);
}

const inTransitHandler = (payload) => {
  console.log(`EVENT in-transit order ${payload.orderID}`);
}

const driverDelivered = (payload) => {
  console.log(`DRIVER delivered order ${payload.orderID}`);
}

const vendorThanksHandler = (payload) => {
  console.log(`VENDOR Thank you for delivering order ${payload.orderID}`);
}

const endEventDelivered = (payload) => {
  console.log(`EVENT delivered order ${payload.orderID}`);
  console.log('=============================')
}

module.exports = {
  pickupOrderLogger,
  driverPickUpHandler,
  inTransitHandler,
  driverDelivered,
  vendorThanksHandler,
  endEventDelivered
};
