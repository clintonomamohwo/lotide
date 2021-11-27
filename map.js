
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const output = eqArrays(arrayOne, arrayTwo);
  if (output) {
    console.log(`✅ Assertion Passed ${arrayOne} === ${arrayTwo}`);

  } else {
    console.log(`  ❌ Assertion Failed ${arrayOne} !== ${arrayTwo}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map=function(array,callback)
{
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
  
}


const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']))
