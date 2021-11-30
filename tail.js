//const assertEqual = require('./assertEqual');

const tail = function(array) {
  console.log(array.slice(1));
  return array.slice(1); // return [words.slice(1)];
  
};

//test case
module.exports = tail;