// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should correctly add two rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.1), 4);
  });

  it('should correctly subtract two rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.9, 3.1), 3);
  });

  it('should correctly divide two rounded numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
  });

  it('should return "Error" when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5.9, 0), 'Error');
  });

  it('should throw an error for an invalid type', function () {
    assert.throws(function () {
      calculateNumber('INVALID_TYPE', 1.4, 4.5);
    }, Error);
    assert.throws(function () {
      calculateNumber('INVALID_TYPE', 5.9, 3.1);
    }, Error);
  });
});
