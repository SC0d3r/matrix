const isValid = require('./isValid');
const messages = require('./messages.json');
const _clone = require('./_clone');

module.exports = function clone(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  return _clone(m);
}