// 3-payment.test.js

const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with type "SUM" and the correct arguments', function () {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the expected arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });

  it('should log the correct total', function () {
    // Create a spy for console.log to capture the log message
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the log message is as expected
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    // Restore the spy to its original state
    consoleLogSpy.restore();
  });
	// Inside the same describe block in 4-payment.test.js

  it('should call Utils.calculateNumber with type "SUM" and specific arguments', function () {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the expected arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total using console.log', function () {
    // Create a spy for console.log to capture the log message
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the log message is as expected
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Restore the spy to its original state
    consoleLogSpy.restore();
  });
});
