const _zeros = require('./_zeros');
const { isANumber } = require('./utils');

const isZero = x => x === 0;

module.exports = function zeros(rows, cols) {
  if (rows === undefined)
    throw new Error('zeros(--> Here should be a number but its undefined <-- , cols)');

  if (!isANumber(rows))
    throw new Error('zeros(--> Here should be a number <-- , cols)');

  if (isZero(rows))
    throw new Error('zeros(--> You passed 0 here! <--,cols)');

  if (cols !== undefined) {
    if (!isANumber(cols))
      throw new Error('zeros(rows ,--> Here should be a number <--)');
    if (isZero(cols))
      throw new Error('zeros(rows ,--> You passed 0 here! <--)');
  }

  rows = Math.abs(rows);
  cols = Math.abs(cols || rows);

  return _zeros(rows, cols);
}