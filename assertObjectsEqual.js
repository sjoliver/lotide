const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
 
  // return false if the number of keys between the 2 objects are not the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 

  // loop through the keys in object1 => Object.keys(object1) creates an array of keys as elements in the array
  for (const key of Object.keys(object1)) { 
    
    // Array.isArray checks if the passed argument is an array, returns true or false => object1[key] references the value, which Array.isArray checks to see if that value is an array
    if (Array.isArray((object1[key])) !== Array.isArray((object2[key]))) {
      return false;
    }

    if (Array.isArray(object1[key]) === true) {
      // eqArrays checks if array1 is the same as array2 => if the arrays are not identical, return false
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    } else {
      // if the values at a certain key in object1 do not equal the values at a certain key in object2, return false
      if (object1[key] !== object2[key]) {
        return false;
      }
    } 
  } 
  // if "return false" is never hit, then the 2 objects must be identical so return true
  return true;
}

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
