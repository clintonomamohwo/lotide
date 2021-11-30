const assertEqual = require('./assertEqual');





const eqArrays = function(arrayOne, arrayTwo) {
 
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let element = 0; element < arrayOne.length; element++) {

    /*Recursive function: calls itself until it doesnt -- nested array*/
    if (Array.isArray(arrayOne[element]) && Array.isArray(arrayTwo[element])) {
      if (eqArrays(arrayOne[element],arrayTwo[element]) === false) {
        return false;
      }


    } else if (arrayOne[element] !== arrayTwo[element]) {
      return false;
    }
  }
  return true;
  
};

module.exports = eqArrays;