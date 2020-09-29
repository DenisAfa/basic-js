const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if ( !(str) || typeof(str) != "string" || (+str) > 15 || (+str) <= 0 || parseInt(str) == NaN || isNaN(str)) {
    return false;
  } else {
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / +str) / k);
    return t;
  }
};
