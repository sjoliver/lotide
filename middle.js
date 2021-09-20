// new middle function 
const middle = function(array) {
  let midArray = [];
  
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    const midOdd = array.length / 2;
    const midInd = Math.floor(midOdd);
    midArray.push(array[midInd])
    
    return midArray;
  } else {
    const midEven = array.length / 2;
    const mid1 = midEven - 1; 
    const mid2 = midEven;
    midArray.push(array[mid1], array[mid2]);

    return midArray;
  }
};

module.exports = middle;