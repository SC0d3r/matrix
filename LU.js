const isValid = require('./isValid');
const {common} = require('./messages');
const _LU = require('./_LU');

module.exports = function LU(m) {
  if (!isValid(m))
    throw new Error(common);

  return _LU(m);
}