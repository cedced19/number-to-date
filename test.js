var assert = require('assert');

var numberToDate = require('./');

describe('Test number-to-date function', function () {

  it('should get a month from a number', function () {
    var output = numberToDate(1, 'month');
    assert.equal(output, 'January', 'should be "January"');
  });

  it('should get a month from a number an other language', function () {
    var output = numberToDate(1, 'month', 'fr');
    assert.equal(output, 'Janvier', 'should be "Janvier"');
  });

  it('should get a day from a number', function () {
    var output = numberToDate(1, 'day');
    assert.equal(output, 'Monday', 'should be "Monday"');
  });

  it('should get a day from a number an other language', function () {
    var output = numberToDate(1, 'day', 'fr');
    assert.equal(output, 'Lundi', 'should be "Lundi"');
  });

});
