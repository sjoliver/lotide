const assertArraysEqual = require('./assertArraysEqual');

// New fn like Lodash's takeWhile
const takeUntil = function(array, callBack) {
  let newArray = [];
  for (const element of array) {
    if (callBack(element)) {
      return newArray;
    }
    newArray.push(element);
  }
};

// Expected INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

// ASSERTIONS
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);


// Expected OUTPUT
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = {
  takeUntil
}