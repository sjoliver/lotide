const assertArraysEqual = require('./assertArraysEqual');

// NEW MAP FUNCTION 
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ]);

module.exports = {
  map
}