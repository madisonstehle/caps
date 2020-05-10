'use strict';

/** 
 *  @fileOverview creates an instance of the JS event emitter
 *  @author       Madison Stehle
 * 
 *  @requires     NPM:events
 */

const EventEmitter = require('events');

const emitter = new EventEmitter();


/** @exports emitter */
module.exports = emitter;
