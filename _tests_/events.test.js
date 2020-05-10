'use strict';

let globalEmitter = require('../lib/events.js');
let handlers = require('../lib/handlers.js');

let consoleSpy = jest.spyOn(console, 'log');

describe('the handler functions', () => {
  it('new order for pickup logger', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.pickupOrderLogger(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('driver picked up order', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.driverPickUpHandler(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('order is in transit logger', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.inTransitHandler(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('driver delivered the order', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.driverDelivered(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('thank you message from the vendor', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.vendorThanksHandler(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('event order delivered', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    expect(handlers.endEventDelivered(payload)).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('emitter does emit', () => {
  it('pickup emits', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    globalEmitter.on('pickup', handlers.pickupOrderLogger);
    globalEmitter.emit('pickup', payload);

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('intransit emits', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    globalEmitter.on('in-transit', handlers.inTransitHandler);
    globalEmitter.emit('in-transit', payload);

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('delivered emits', () => {
    let payload = {
      time: 'Mon Sep 28 2020 09:10:38 GMT-0700 (Pacific Daylight Time)',
      store: 'Stroman - Labadie',
      orderID: 68322,
      customer: 'Arlie Corkery',
      address: '51963 Rossie Drives, East Andrewhaven, NH'
    };

    globalEmitter.on('delivered', handlers.endEventDelivered);
    globalEmitter.emit('delivered', payload);

    expect(consoleSpy).toHaveBeenCalled();
  });
})