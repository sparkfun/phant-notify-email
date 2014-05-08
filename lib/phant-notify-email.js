/**
 * phant-notify-email
 * https://github.com/sparkfun/phant-notify-email
 *
 * Copyright (c) 2014 SparkFun Electronics
 * Licensed under the GPL v3 license.
 */

'use strict';

var util = require('util');

/**** PhantNotify prototype ****/
var app = PhantNotify.prototype;

/**** Expose PhantNotify ****/
exports = module.exports = PhantNotify;

/**** Initialize a new PhantNotify ****/
function PhantNotify(config) {

  if (! (this instanceof PhantNotify)) {
    return new PhantNotify(config);
  }

  config = config || {};

  util._extend(this, config);

}
