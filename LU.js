const isValid = require('./isValid');
const messages = require('./messages.json');
const _LU = require('./_LU');

module.exports = function LU(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  return _LU(m);
}