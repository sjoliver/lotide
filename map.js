// functions to compare arrays and assert whether or not they are equal
const eqArrays = function(array1, array2) {
  let result;
  for (let i = 0; i < array1.length; i++) {
    for (let i2 = 0; i2 < array2.length; i2++) {
      if (array1[i] === array2[i2]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`💚💚💚 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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