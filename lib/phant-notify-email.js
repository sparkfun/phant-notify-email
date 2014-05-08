/**
 * phant-notify-email
 * https://github.com/sparkfun/phant-notify-email
 *
 * Copyright (c) 2014 SparkFun Electronics
 * Licensed under the GPL v3 license.
 */

'use strict';

var util = require('util'),
    os = require('os'),
    nodemailer = require('nodemailer');

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

app.useSMTP = function(options) {
  this.mailer = nodemailer.createTransport('SMTP', options);
};

app.useSendmail = function(options) {
  this.mailer = nodemailer.createTransport('sendmail', options);
};

/**** direct transport by default ****/
app.mailer = nodemailer.createTransport();
app.from = 'Phant <data@sparkfun.com>';
app.subject = 'New Phant Stream: ';

/**
 * expect
 *
 * this is used by the managers
 * to prompt users for the appropriate
 * info to send notifications.
 */
app.expect = {
  to: 'Email Address'
};

/**
 * create
 *
 * sends stream creation messages to users
 */
app.create = function(options, stream, cb) {

  for(var key in this.expect) {

    if(! options[key]) {
      return cb('Could not send email. Missing: ' + this.expect[key]);
    }

  }

  options.from = this.from;
  options.subject = this.subject + stream.publicKey;

  options.text = 'New Stream Created!\n' +
                 '===================\n\n' +
                 stream.title + '\n' +
                 'Public Key: ' + stream.publicKey + '\n' +
                 'Private Key: ' + stream.privateKey + '\n' +
                 'Delete Key: ' + stream.deleteKey + '\n\n' +
                 'Have fun!\n - ' +
                 os.hostname();

  this.mailer.sendMail(options, function(err, response) {

    if(err) {
      return cb('Could not send email. ' + err);
    }

    cb(null);

  });

};

