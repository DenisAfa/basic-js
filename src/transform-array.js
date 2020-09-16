const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArr = arr;
  if (Array.isArray(arr) == false) {
    throw new Error("TypeError"); 
  } else {
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] == "--discard-next") {
        resultArr.splice(i, 2);
        arr.splice(i,1);
      } else if (resultArr[i] == "--discard-prev") {
        resultArr.splice(i-1, 2);
        arr.splice(i,1);
      } else if (resultArr[i] == "--double-next") {
        resultArr.splice(i, 1, resultArr[i+1]);
        arr.splice(i,1);
      } else if (resultArr[i] == "--double-prev") {
        resultArr.splice(i, 1, resultArr[i-1]);
        arr.splice(i,1);
      }
    } 
  }
  
  return resultArr
};
