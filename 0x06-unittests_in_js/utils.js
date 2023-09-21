// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      default:
        throw new Error('Invalid type. Type must be SUM.');
    }
  },
};

module.exports = Utils;
