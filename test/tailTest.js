const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // words is unchanged


const testArr = [1, 2, 3];
const tailOut = tail(testArr);
console.log(tailOut);
