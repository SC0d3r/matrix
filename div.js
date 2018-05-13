const isValid = require('./isValid');
const additionValidity = require('./additionValidity');
const messages = require('./messages.json');
const _div = require('./_div');

module.exports = function div(m1, m2) {
  if (
    !isValid(m1) ||
    !isValid(m2) ||
    !additionValidity(m1, m2)
  )
    throw new Error(messages.default);

  return _div(m1 , m2);
}