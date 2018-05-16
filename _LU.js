const { isArray, column, columns, row, rows, interchangeRows } = require('./utils');
const identity = require('./identity');

module.exports = function _LU(m) {

  const _rows = rows(m);
  const cols = columns(m);

  const lMatrix = identity(_rows);

  let j = 0;
  for (let i = 0; i < _rows; i++) {
    let k = i;
    let pivot = m[k][j];
    while (pivot === 0) {
      k++;
      if (k > _rows - 1) return m;
      pivot = m[k][j];
    }

    if (k > _rows - 1)
      m[i] = m[i].map(x => x / pivot);

    for (let u = i + 1; u < _rows; u++) {
      let underPivot = m[u][j];
      if (underPivot === 0) continue;

      if (k <= _rows - 1) {
        underPivot /= pivot;
      }
      lMatrix[u][j] = underPivot;
      m[u] = m[i].map((x, z) => (m[u][z] - (x * underPivot)));
    }

    j++;
    if (j === cols - 1) break;
  }
  return [lMatrix , m]; // returns [LT , UT]
}