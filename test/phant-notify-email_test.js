'use strict';

var PhantNotify = require('../lib/phant-notify-email.js'),
    notify = PhantNotify();

exports.phantNotify = {

  setUp: function(done) {

    this.stream = {
      publicKey: 'abcdefg',
      privateKey: 'hijklmnop',
      deleteKey: 'qrstuv'
    };

    done();
  },

  'create email': function(test) {

    test.expect(1);

    notify.create({to: 'todd.treece@sparkfun.com'}, this.stream, function(err) {

      test.ok(!err, 'should send mail');
      test.done();

    });

  }

};

