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

// c style loop
  /* for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        newArray.push(source[i]);
    }
  }
  */

// function that itemsToRemoves unwanted words from the source array & returns an updated array
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let word of source) {
    if (itemsToRemove[word] !== source[word]) {
      newArray.push(source[word]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [2]))

// test cases (1)
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]))
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// add console break for viewability
console.log("---- break ----")

// same without function with new .include() method
const without2 = function(source, itemsToRemove) {
  let newArray = [];
  for (let word of source) { 
    if (!itemsToRemove.includes(word)) {
      newArray.push(word);
    }
  }
  return newArray;
};

console.log(without2([1, 2, 3], [2]))

assertArraysEqual(without2([1, 2, 3], [1, 3]), [2, 3]);
assertArraysEqual(without2([1, 2, 3], [1, 3]), [6, 0]);

// test cases (1)
console.log(without2(words, ["lighthouse"]))
without2(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);