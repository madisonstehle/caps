'use strict';

const globalEmitter = require('./lib/events.js');

const eventHandler = (payload) => {
  // do stuff
  console.log(payload);
};

globalEmitter.on('pickup', eventHandler);

// globalEmitter.emit('shout');

require('./lib/vendor.js');
