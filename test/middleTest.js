const assert = require('chai').assert;
const middle = require('../middle');


describe(`#middle()`, () => {
  it(`return [2] for [1,2,3]`, () => {
    let result = middle([1,2,3]);
    assert.deepEqual(result,[2]);
  });

  it(`return [1,2] for [0,1,2,3]`, () => {
    //let result = middle([0,1,2,3]);
    assert.deepEqual(middle([0,1,2,3]),[1, 2]);
  });

  it(`return [] for [0,1]`, () => {
    let result = middle([0,1]);
    assert.deepEqual(result,[]);
  });

  it(`return [] for [0]`, () => {
    let result = middle([0]);
    assert.deepEqual(result,[]);
  });

});