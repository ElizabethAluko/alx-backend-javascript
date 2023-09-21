// 2-calcul.test.js

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  it('should correctly add two rounded numbers', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.4, 3.1)).to.equal(4);
  });

  it('should correctly subtract two rounded numbers', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5.9, 3.1)).to.equal(3);
  });

  it('should correctly divide two rounded numbers', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
  });

  it('should return "Error" when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 5.9, 0)).to.equal('Error');
  });

  it('should throw an error for an invalid type', function () {
    expect(function () {
      calculateNumber('INVALID_TYPE', 1.4, 4.5);
    }).to.throw(Error);
    expect(function () {
      calculateNumber('INVALID_TYPE', 5.9, 3.1);
    }).to.throw(Error);
  });
});
