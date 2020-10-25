const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  let resultArr = arr.slice();
  if (Array.isArray(resultArr) == false) {
    throw new Error("TypeError"); 
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--discard-next" && i == (arr.length - 1) ) {
      resultArr.splice(resultArr.indexOf("--discard-next"), 1);
      continue;
      } else if ( arr[i] == "--double-next" && i == (arr.length - 1) ) {
        resultArr.splice(resultArr.indexOf("--double-next"), 1);
        continue;
      } else if (arr[i] == "--discard-prev" && i == 0) {
        resultArr.splice(resultArr.indexOf("--discard-prev"), 1);
        continue;
      } else if (arr[i] == "--double-prev" && i == 0 ) {
        resultArr.splice(resultArr.indexOf("--double-prev"), 1);
        continue;
      } 
      switch (arr[i]) {
        case ("--discard-next"):
          if (resultArr[resultArr.indexOf("--discard-next")+1] === arr[i+1] || Number.isNaN(resultArr[resultArr.indexOf("--discard-next") + 1]) && Number.isNaN(arr[i+1])) {
            resultArr.splice(resultArr.indexOf("--discard-next"), 2);
          } else {
            resultArr.splice(resultArr.indexOf("--discard-next"), 1); 
          }
          break;
        case ("--discard-prev"):
          if (resultArr[resultArr.indexOf("--discard-prev")-1] === arr[i-1] || Number.isNaN(resultArr[resultArr.indexOf("--discard-prev") - 1]) && Number.isNaN(arr[i-1])) {
            resultArr.splice(resultArr.indexOf("--discard-prev")-1, 2);
          } else {
            resultArr.splice(resultArr.indexOf("--discard-prev"), 1); 
          }
          break;
        case ("--double-next"):
          if (resultArr[resultArr.indexOf("--double-next")+1] === arr[i+1] || Number.isNaN(resultArr[resultArr.indexOf("--double-next") + 1]) && Number.isNaN(arr[i+1])) {
            resultArr.splice(resultArr.indexOf("--double-next"), 1, resultArr[resultArr.indexOf("--double-next")+1]);
          } else {
            resultArr.splice(resultArr.indexOf("--double-next"), 1); 
          }
          break;
        case ("--double-prev"):
          if (resultArr[resultArr.indexOf("--double-prev") - 1] === arr[i-1] || Number.isNaN(resultArr[resultArr.indexOf("--double-prev") - 1]) && Number.isNaN(arr[i-1])) {
            resultArr.splice(resultArr.indexOf("--double-prev"), 1, resultArr[resultArr.indexOf("--double-prev") - 1]);
          } else {
            resultArr.splice(resultArr.indexOf("--double-prev"), 1); 
          }
          break;
      } 
    } 
  }

  return resultArr
};

