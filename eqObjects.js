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
  let numOfKeys1 = Object.keys(object1).length; // find number of keys in object1
  let numOfKeys2 = Object.keys(object2).length; // find number of keys in object2
 
  // return false if the number of keys between the 2 objects are not the same
  if (numOfKeys1 !== numOfKeys2) {
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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// MORE TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); 
assertEqual(eqObjects(cd, cd2), false);