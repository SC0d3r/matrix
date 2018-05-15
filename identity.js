const _identity = require('./_identity');

const isANumber = x => !isNaN(x) && typeof x === 'number';

module.exports = function identity(n) {
  if (n === undefined) throw new Error('identity(--> Here should be a number But it is undefined <--)');

  if (!isANumber(n)) throw new Error('identity(--> Here should be a number <--)');
  n = Math.abs(n);

  return _identity(n);
}