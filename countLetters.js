const assertEqual = require('./assertEqual')

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

// TEST CODE
const sentence = "LHL is cool";
assertEqual(countLetters(sentence).L, 2);

module.exports = {
  countLetters
}