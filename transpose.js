const isValid = require('./isValid');
const messages = require('./messages.json');
const _transpose = require('./_transpose');

module.exports = function transpose(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  return _transpose(m);
}