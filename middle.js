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

// new middle function 
const middle = function(array) {
  const midArray = [];
  if (array.length <= 2) {
    return midArray;
  }
    if (array.length % 2 !== 0) {
      const midOdd = array.length / 2;
      const midInd = Math.floor(midOdd);
      midArray.push(array[midInd])
      return midArray;
    }
    const midEven = array.length / 2;
      const mid1 = midEven - 1; 
      const mid2 = midEven;
      midArray.push(array[mid1], array[mid2]);
  return midArray;
};

// test code
const oddArray = [1, 2, 3];
const evenArray = [1, 2, 3, 4];
const smArray = [1, 2];
assertArraysEqual(middle(oddArray), [2]);
assertArraysEqual(middle(evenArray), [2, 3]);
assertArraysEqual(middle(smArray), []);
console.log(middle(smArray));
