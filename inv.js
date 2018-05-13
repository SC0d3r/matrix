const isValid = require('./isValid');
const messages = require('./messages.json');

const _inv = require('./_inv');

module.exports = function inv(m) {
  if (!isValid(m))
    throw new Error(messages.default);
  
  return _inv(m);
} 