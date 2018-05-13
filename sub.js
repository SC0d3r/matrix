const additionValidity = require('./additionValidity');
const messages = require('./messages.json');
const {isArray} = require('./utils');

const message = messages.default;

module.exports = function sub(m1, m2) {
  if (!additionValidity(m1, m2))
    throw new Error(message);


  const isTwoDim = isArray(m1[0]) || isArray(m2[0]);

  return isTwoDim ? twoDimSub(m1, m2) : oneDimSub(m1, m2);
}

function twoDimSub(m1, m2) {
  const res = [];
  const cols = m1[0].length;
  const rows = m1.length;
  for (let i = 0; i < rows; i++) {
    res[i] = [];
    for (let j = 0; j < cols; j++) {
      res[i][j] = m1[i][j] - m2[i][j];
    }
  }
  return res;
}
function oneDimSub(m1, m2) {
  const rows = m1.length;
  const res = [];
  for (let i = 0; i < rows; i++) {
    res[i] = m1[i] - m2[i];
  }
  return res;
}

