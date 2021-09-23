const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const map = require('./map');
const takeUntil = require('./takeUntil');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  eqObjects: eqObjects,
  map: map,
  takeUntil: takeUntil,
  assertEqual: assertEqual,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  findKey: findKey,
  letterPositions: letterPositions,
  without: without
};