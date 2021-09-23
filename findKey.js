const assertEqual = require('./assertEqual');

const findKey = function(object, callBack) {
  for(const key in object) {
    if(callBack(object[key])) {
      return key;
    }
  }
};

testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(testObject, x => x.stars === 2), "noma");

module.exports = {
  findKey
}