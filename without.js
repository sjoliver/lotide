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

const without = function(source, itemsToRemove) {
  let newArray = [];

  // 
  for (let element of source) { 
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [1, 3]), [2]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// test cases (1)
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]))

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
