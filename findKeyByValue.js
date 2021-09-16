const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let result;
    for (const key in object) { 
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};


// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // true
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); // false
assertEqual(findKeyByValue(bestTVShowsByGenre, "Final Table"), "reality"); // false
assertEqual(findKeyByValue(bestTVShowsByGenre, "Final Table"), undefined); // true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // true