const { columns, rows } = require('./utils');

const fixed = x => num => (+num.toFixed(x));

module.exports = function _mul(m1, m2, precision = 5) {

  const isTwoDim = columns(m2) !== 1;

  return isTwoDim ? twoDimMul(m1, m2, precision) : oneDimMul(m1, m2, precision);
}

function twoDimMul(m1, m2 , precision) {
  const res = [];
  const resultM_rows = rows(m1);
  const resultM_cols = columns(m2);
  const fixedPrecision = fixed(precision);

  const m1Cols = columns(m1);
  for (let i = 0; i < resultM_rows; i++) {
    res[i] = [];
    for (let j = 0; j < resultM_cols; j++) {
      let temp = 0;
      for (let k = 0; k < m1Cols; k++) {
        temp += m1[i][k] * m2[k][j];
      }
      res[i][j] = fixedPrecision(temp);
    }
  }
  return res;
}


function oneDimMul(m1, m2 , precision) {
  let res = 0;

  const fixedPrecision = fixed(precision);

  const m1Cols = columns(m1);
  for (let i = 0; i < m1Cols; i++) {
    res += m1[i] * m2[i][0];
  }

  return [fixedPrecision(res)];
}
