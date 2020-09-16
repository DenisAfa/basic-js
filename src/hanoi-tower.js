const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurn = (2 ** disksNumber - 1);
  let minSpeed = Math.floor(minTurn / turnsSpeed * 3600);
  let result = {
    turns: minTurn,
    seconds: minSpeed,
  }
  return result;
};
