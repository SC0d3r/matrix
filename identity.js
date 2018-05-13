const _identity = require('./_identity');

const isANumber = x => !isNaN(x) && typeof x === 'number';

module.exports = function identity(n) {
  if (n === undefined) throw new Error('Provide an argument for identity function');

  if (!isANumber(n)) throw new Error('argument must be a number');
  n = Math.abs(n);

  return _identity(n);
}