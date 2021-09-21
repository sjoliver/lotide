const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// test code
const oddArray = [1, 2, 3];
const evenArray = [1, 2, 3, 4];
const smArray = [1, 2];

assertArraysEqual(middle(oddArray), [2]); // pass
assertArraysEqual(middle(evenArray), [2, 3]); // pass
assertArraysEqual(middle(smArray), []); // pass