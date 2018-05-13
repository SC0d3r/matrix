const isValid = require('./isValid');
const additionValidity = require('./additionValidity');
const messages = require('./messages.json');
const { isArray, columns, rows } = require('./utils');
module.exports = function div(m1, m2) {
  if (
    !isValid(m1) ||
    !isValid(m2) ||
    !additionValidity(m1, m2)
  )
    throw new Error(messages.default);

  const isTwoDim = isArray(m1[0]) || isArray(m2[0]);

  return isTwoDim ? twoDimDiv(m1, m2) : oneDimDiv(m1, m2);
}


function twoDimDiv(m1, m2) {
  const res = [];
  const cols = columns(m1);
  const _rows = rows(m1);
  for (let i = 0; i < _rows; i++) {
    res[i] = [];
    for (let j = 0; j < cols; j++) {
      res[i][j] = m1[i][j] / m2[i][j];
    }
  }
  return res;
}
function oneDimDiv(m1, m2) {
  const cols = columns(m1);
  const res = [];
  for (let i = 0; i < cols; i++) {
    res[i] = m1[i] / m2[i];
  }
  return res;
}