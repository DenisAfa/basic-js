const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (let line of matrix) {
    for (let cat of line) {
      if (cat == "^^"){
        cats += 1;
      }
    } 
  }
  return cats


};
