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

//const without = function(arrayOne, arrayTwo)