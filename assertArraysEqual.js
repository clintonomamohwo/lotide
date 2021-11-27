/* const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let element = 0; element < arrayOne.length; element++) {

    //Recursive function: calls itself until it doesnt -- nested array
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
*/

//TRYING A DIFFERENT METHOD FOR THE eqArray function

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  const output = eqArrays(arrayOne, arrayTwo);
  if (output) {
    console.log(`✅ Assertion Passed ${arrayOne} === ${arrayTwo}`);

  } else {
    console.log(`  ❌ Assertion Failed ${arrayOne} !== ${arrayTwo}`);
  }
};

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([1,2,3,4],[1,2,]);


