const isANumber = x => !isNaN(x) && typeof x === 'number';
module.exports = function identity(n) {
  if (n === undefined) throw new Error('Provide an argument for identity function');

  if (!isANumber(n)) throw new Error('argument must be a number');
  n = Math.abs(n);

  const res = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) res[i][j] = 1;
      else res[i][j] = 0;
    }
  }
  return res;
}