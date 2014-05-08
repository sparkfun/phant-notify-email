'use strict';

var PhantNotify = require('../lib/phant-notify-email.js'),
    notify = PhantNotify();

exports.phantNotify = {

  setUp: function(done) {
    done();
  },

  tearDown: function(done) {
    done();
  },

  'no args': function(test) {

    test.expect(1);
    test.ok(notify, 'should be ok');
    test.done();

  }

};

