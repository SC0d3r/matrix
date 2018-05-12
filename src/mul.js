const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const { isArray, columns, rows } = require('./utils');

const fixed = x => num => (+num.toFixed(x));

module.exports = function mul(m1, m2, precision = 5) {
  if (!isValid(m1) || !isValid(m2))
    throw new Error(messages.default);

  if (!validDimforMul(m1, m2))
    throw new Error('Matrices dont have valid dim for multiplication');


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

function validDimforMul(m1, m2) {
  return columns(m1) === rows(m2);
}