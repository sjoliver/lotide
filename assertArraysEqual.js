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

// test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);