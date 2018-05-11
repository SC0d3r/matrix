const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const {
  isArray,
  column, columns,
  row, rows,
  interchangeRows } = require('./utils');

module.exports = function det(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  const _rows = rows(m);
  const cols = columns(m);

  if (_rows !== cols)
    throw new Error('for calculating determinant you have to pass a square matrix');


  if (_rows === 1 && cols === 1) return column(row(m, 0), 0)[0];

  if (_rows === 2 && cols === 2) return m[0][0] * m[1][1] - (m[0][1] * m[1][0]);

  if (_rows === 3 && cols === 3) {
    return (
      (
        (m[0][0] * m[1][1] * m[2][2]) +
        (m[0][1] * m[1][2] * m[2][0]) +
        (m[0][2] * m[1][0] * m[2][1])
      ) - (
        (m[0][2] * m[1][1] * m[2][0]) +
        (m[0][1] * m[1][0] * m[2][2]) +
        (m[0][0] * m[1][2] * m[2][1])
      )
    );
  }

  return complexDeterminant(m, _rows, cols);
}


function complexDeterminant(m, rows, cols) {
  const _rows = rows;
  let howManyRowsInterchange = 0;
  let j = 0;
  outer: for (let i = 0; i < _rows; i++) {
    let k = i;
    let pivot = m[k][j];
    while (pivot === 0) {
      k++;
      if (k > _rows - 1) break outer;
      pivot = m[k][j];
    }
    if (i !== k) {
      interchangeRows(m, i, k);
      howManyRowsInterchange++;
    }

    if (k > _rows - 1)
      m[i] = m[i].map(x => x / pivot);

    for (let u = i + 1; u < _rows; u++) {
      let underPivot = m[u][j];
      if (underPivot === 0) continue;

      if (k <= _rows - 1) {
        underPivot /= pivot;
      }
      m[u] = m[i].map((x, z) => (m[u][z] - (x * underPivot)));
    }

    j++;
    if (j === cols - 1) break;
  }
  const d = diag(m, _rows, cols);
  return Math.pow(-1, howManyRowsInterchange) * d.reduce((a, b) => a * b, 1);

}

function diag(m, rows, cols) {
  let d = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === j) d.push(m[i][j]);
    }
  }
  return d;
}