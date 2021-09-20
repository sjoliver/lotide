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

module.exports = eqArrays;