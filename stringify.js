const isValid = require('./isValid');
const {common} = require('./messages');
const _stringify = require('./_stringify');

module.exports = function stringify(m, precision = 2) {
  if (!isValid(m))
    throw new Error(common);

  return _stringify(m, precision);
}