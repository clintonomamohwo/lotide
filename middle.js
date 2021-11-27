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
-undefined
-null
-boolean
-string
-number
-symbol

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


const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    //console.log(array.length)
    return array[Math.floor(array.length / 2)];
  }
  if (array.length % 2 === 0) {
    //console.log(array.length)
    return array[Math.ceil(array.length / 2) - 1] + ", " + array[Math.round(array.length / 2) ];
  }
};


//assertArraysEqual([1,2,3,4],[1,2,3,4]);
//assertArraysEqual([1,2,3,4],[1,2,]);


// console.log("empty array",assertArraysEqual(middle([1])));
// console.log("should be 2==>",middle([1, 2, 3]));
//console.log("should be 2 and 3===>",middle([1, 2, 3, 4]));
//assertArraysEqual(middle([1, 2, 3, 4, 5]));
//console.log("should be 3 and 4===>",middle([1, 2, 3, 4, 5, 6]));

const person = { firstName: "Khurram" };
const firstName = person[firstName];
console.log(firstName);