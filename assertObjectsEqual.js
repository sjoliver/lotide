const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({'a': 1, 'b': 2}, {'a': 1, 'b': 2}); // true
assertObjectsEqual({'a': 1, 'b': 2}, {'a': 1, 'b': 3}); // false


module.exports = {
  assertObjectsEqual
}
