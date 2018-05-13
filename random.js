const isANumber = x => !isNaN(x) && typeof x === 'number';
const isAFunction = x => typeof x === 'function';
const _random = require('./_random');

module.exports = function random(row, col, randGen) {
  if (!isANumber(row))
    throw new Error('first argument should be a number');

  if (col !== undefined) {
    if (isAFunction(col)) {
      randGen = col;
      col = row;
    } else if (!isANumber(col))
      throw new Error('second argument should be a number of columns');
  }


  if (randGen !== undefined && !isAFunction(randGen))
    throw new Error('third argument should a function to generate random numbers');

  col = Math.abs(col || row);
  row = Math.abs(row);
  
  return _random(row , col , randGen);
}