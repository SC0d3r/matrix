const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const { rows, columns, isArray } = require('./utils');

module.exports = function clone(m) {
  if (!isValid(m))
    throw new Error(messages.default);


  const isTwoDim = isArray(m[0]);

  return isTwoDim ? clone2D(m) : oneDimClone(m);
}


function oneDimClone(m) {
  const cols = columns(m);
  const cloned = [];

  for (let i = 0; i < cols; i++) {
    cloned[i] = m[i];
  }

  return cloned;
}


function clone2D(m) {
  const _rows = rows(m);
  const cols = columns(m);

  const cloned = [];
  for (let i = 0; i < _rows; i++) {
    cloned[i] = [];
    for (let j = 0; j < cols; j++) {
      cloned[i][j] = m[i][j];
    }
  }

  return cloned;

}