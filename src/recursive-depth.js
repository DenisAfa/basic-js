const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if ( !(arr.some(Array.isArray)) ) {
      return 1;
    } else {
      return this.calculateDepth(arr.flat()) + 1;
    }
  }
};