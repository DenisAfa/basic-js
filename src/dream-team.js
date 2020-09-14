const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arrLetter = [];
  try {
    for (let member of members) {
      if(typeof(member) == "string") {
        newMember = member.trim().toUpperCase();
      arrLetter.push(newMember[0]);
    }
  }
  } catch(err) {
    return false;
  }
  let newName = arrLetter.sort().join("");
  return newName;
  
};
