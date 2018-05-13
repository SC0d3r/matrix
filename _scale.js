const { isArray } = require('./utils');

module.exports = function _scale(m, mag = 1) {

  const isTwoDim = isArray(m[0]);

  return isTwoDim ? twoDimScale(m, mag) : oneDimScale(m, mag);

}

function twoDimScale(m, mag) {
  const res = [];
  const cols = m[0].length;
  const rows = m.length;
  for (let i = 0; i < rows; i++) {
    res[i] = [];
    for (let j = 0; j < cols; j++) {
      res[i][j] = m[i][j] * mag;
    }
  }
  return res;
}

function oneDimScale(m, mag) {
  const rows = m.length;
  const res = [];
  for (let i = 0; i < rows; i++) {
    res[i] = m[i] * mag;
  }
  return res;
}

