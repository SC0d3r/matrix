const isANumber = x => !isNaN(x) && typeof x === 'number';
const isAFunction = x => typeof x === 'function';
const _random = require('./_random');

module.exports = function random(rows, cols, randGen) {
  if (!isANumber(rows))
    throw new Error('first argument should be a number');

  if (cols !== undefined) {
    if (isAFunction(cols)) {
      randGen = cols;
      cols = rows;
    } else if (!isANumber(cols))
      throw new Error('second argument should be a number of columns');
  }


  if (randGen !== undefined && !isAFunction(randGen))
    throw new Error('third argument should a function to generate random numbers');

  cols = Math.abs(cols || rows);
  rows = Math.abs(rows);
  
  return _random(rows , cols , randGen);
}