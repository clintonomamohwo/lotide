const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  const output = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] = output[letter] + 1;
      } else {
        output[letter] = 1;

      }
    }

  }
  return output;
  
};

console.log(countLetters("How are you"));

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, "1");
// assertEqual(1, 1.00);
// assertEqual("A", "a");

