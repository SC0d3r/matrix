const additionValidity = require('./validityCheck/additionValidity');
const { flattenOneLevel , isSemi2D  , isArray} = require('./utils');
const messages = require('./validityCheck/messages.json');

const message = messages.default;

module.exports = function add(m1, m2) {
  if (!additionValidity(m1, m2))
    throw new Error(message);

  if (isSemi2D(m1)) m1 = flattenOneLevel(m1);
  if (isSemi2D(m2)) m2 = flattenOneLevel(m2);

  const isTwoDim = isArray(m1[0]) || isArray(m2[0]);

  return isTwoDim ? twoDimSum(m1, m2) : oneDimSum(m1, m2);
}

function twoDimSum(m1, m2) {
  const res = [];
  const cols = m1[0].length;
  const rows = m1.length;
  for (let i = 0; i < rows; i++) {
    res[i] = [];
    for (let j = 0; j < cols; j++) {
      res[i][j] = m1[i][j] + m2[i][j];
    }
  }
  return res;
}
function oneDimSum(m1, m2) {
  const rows = m1.length;
  const res = [];
  for (let i = 0; i < rows; i++) {
    res[i] = m1[i] + m2[i];
  }
  return res;
}

