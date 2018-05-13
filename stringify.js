const isValid = require('./isValid');
const messages = require('./messages.json');
const _stringify = require('./_stringify');

module.exports = function stringify(m, precision = 2) {
  if (!isValid(m))
    throw new Error(messages.default);

  return _stringify(m, precision);
}