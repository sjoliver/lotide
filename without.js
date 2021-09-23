const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newArray = [];

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
console.log(without(words, ["lighthouse"]));

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);