const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
    // remove line with error and write your code here
  // let resultArr = arr;
  // if (Array.isArray(arr) == false) {
  //   throw new Error("TypeError"); 
  // } else {
  //   for (let i = 0; i < resultArr.length; i++) {
  //     if (resultArr[i] == "--discard-next" && i == (resultArr.length - 1) || resultArr[i] == "--double-next" && i == (resultArr.length - 1)) {
  //       resultArr.splice(i, 1); 
  //     } else if (resultArr[i] == "--discard-prev" && i == 0 || resultArr[i] == "--double-prev" && i == 0 ) {
  //       resultArr.splice(i, 1);
  //     } 
      
  //     switch (resultArr[i]) {
  //       case ("--discard-next"):
  //         resultArr.splice(i, 2);
  //       case ("--discard-prev"):
  //       resultArr.splice(i-1, 2);
  //       case ("--double-next"):
  //       resultArr.splice(i, 1, resultArr[i+1]);
  //       case ("--double-prev"):
  //       resultArr.splice(i, 1, resultArr[i-1]);
  //     } 
  //   } 
  // }
  
  // return resultArr
};

