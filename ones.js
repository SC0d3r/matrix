const _ones = require('./_ones');
const { isANumber } = require('./utils');

const isZero = x => x === 0;

module.exports = function ones(rows, cols) {
  if (rows === undefined)
    throw new Error('ones(--> Here should be a number <-- , cols)');

  if (!isANumber(rows))
    throw new Error('ones(--> Here should be a number <-- , cols)');

  if (isZero(rows))
    throw new Error('ones(--> You passed 0 here! <--,cols)');

  if (cols !== undefined) {
    if (!isANumber(cols))
      throw new Error('ones(rows ,--> Here should be a number <--)');
    if (isZero(cols))
      throw new Error('ones(rows ,--> You passed 0 here! <--)');
  }

  rows = Math.abs(rows);
  cols = Math.abs(cols || rows);

  return _ones(rows, cols);
}