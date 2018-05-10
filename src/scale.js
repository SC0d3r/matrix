const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const { flattenOneLevel, isSemi2D, isArray } = require('./utils');

module.exports = function scale(m, mag = 1) {
  if (!isValid(m))
    throw new Error(messages.default);
  if (!isNumeric(mag))
    throw new Error('param passed in for scaling is not a number');

  const isTwoDim = isArray(m[0]);

  return isTwoDim ? twoDimScale(m, mag) : oneDimScale(m, mag);

}
function twoDimScale(m , mag) {
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

function oneDimScale(m , mag) {
  const rows = m.length;
  const res = [];
  for (let i = 0; i < rows; i++) {
    res[i] = m[i] * mag;
  }
  return res;
}

function isNumeric(maybeNumber) {
  return !isNaN(maybeNumber) && typeof (maybeNumber) === 'number';
}