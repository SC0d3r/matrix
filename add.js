const additionValidity = require('./additionValidity');
const { isArray , rows , columns} = require('./utils');
const messages = require('./messages.json');

const message = messages.default;

module.exports = function add(m1, m2) {
  if (!additionValidity(m1, m2))
    throw new Error(message);

  const isTwoDim = isArray(m1[0]) || isArray(m2[0]);

  return isTwoDim ? twoDimSum(m1, m2) : oneDimSum(m1, m2);
}

function twoDimSum(m1, m2) {
  const res = [];
  const cols = columns(m1);
  const _rows = rows(m1);
  for (let i = 0; i < _rows; i++) {
    res[i] = [];
    for (let j = 0; j < cols; j++) {
      res[i][j] = m1[i][j] + m2[i][j];
    }
  }
  return res;
}
function oneDimSum(m1, m2) {
  const cols = columns(m1);
  const res = [];
  for (let i = 0; i < cols; i++) {
    res[i] = m1[i] + m2[i];
  }
  return res;
}

