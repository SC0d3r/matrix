const isValid = require('./isValid');
const messages = require('./messages.json');
const _det = require('./_det');

module.exports = function det(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  return _det(m);
}
