const additionValidity = require('./additionValidity');
const messages = require('./messages.json');

const message = messages.default;

const _sub = require('./_sub');

module.exports = function sub(m1, m2) {
  if (!additionValidity(m1, m2))
    throw new Error(message);

  return _sub(m1, m2);
}