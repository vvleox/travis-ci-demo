'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('run hello.js', function() {
  it('return "Hello World"', function() {
    expect(hello()).to.equal('Hello World');
  });
});
