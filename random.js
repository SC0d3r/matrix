const isANumber = x => !isNaN(x) && typeof x === 'number';
const isAFunction = x => typeof x === 'function';
const _random = require('./_random');

module.exports = function random(rows, cols, randGen) {
  if (!isANumber(rows))
    throw new Error('random(--> Here should be the number of rows <--)');

  if (cols !== undefined) {
    if (isAFunction(cols)) {
      randGen = cols;
      cols = rows;
    } else if (!isANumber(cols))
      throw new Error('random(rows , --> Here should be the number of cols <--)');
  }


  if (randGen !== undefined && !isAFunction(randGen))
    throw new Error('random(rows , cols , --> here should be a function to generate random numbers <--)');

  cols = Math.abs(cols || rows);
  rows = Math.abs(rows);

  return _random(rows, cols, randGen);
}