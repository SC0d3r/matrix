const isValid = require('./isValid');
const messages = require('./messages.json');
const { isArray,columns , rows } = require('./utils');

module.exports = function transpose(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  const isTwoDim = isArray(m[0]);

  return isTwoDim ? twoDimTP(m) : oneDimTP(m)
}


function twoDimTP(m) {
  const res = [];
  const cols = columns(m);
  const _rows = rows(m);
  for (let i = 0; i < _rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j] = res[j] || [];
      res[j][i] = m[i][j];
    }
  }
  return res;
}

function oneDimTP(m) {
  const cols = columns(m);
  const res = [];
  for (let i = 0; i < cols; i++) {
    res[i] = [m[i]];
  }
  return res;
}
