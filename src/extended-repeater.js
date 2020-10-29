const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes, separator = "+", addition = "", additionRepeatTimes, additionSeparator = "|"} = options;

  let additionalArr = [];

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionalArr.push(`${addition}`);
  };

  let additionResult = additionalArr.join(additionSeparator);

  let resultArr = [];

  for (let i = 1; i <= repeatTimes; i++) {
    resultArr.push(`${str}${additionResult}`);
  };

  result = resultArr.join(separator);

  return result.length === 0 ? str+addition : result 
};
