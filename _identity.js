
module.exports = function _identity(n) {

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