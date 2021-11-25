

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


const letterPositions = function(sentence) {

  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
//assertArraysEqual(letterPositions("hello").e, [1]);
console.log(assertArraysEqual(letterPositions("rrrrrrk").k,[6]));