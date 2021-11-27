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

const eqObjects = function(object1, object2) {
  let output = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length)
    output = output && false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      output = output && (eqArrays(object1[key], object2[key]));
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      output = output && eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba));

console.log(eqObjects(ab, abc));

console.log(eqObjects(cd, cd2));