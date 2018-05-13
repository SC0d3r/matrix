const _add = require('./_add');
const additionValidity = require('./additionValidity');
const messages = require('./messages.json');

const message = messages.default;

module.exports = function add(m1 , m2){
  if (!additionValidity(m1, m2))
    throw new Error(message);

  return _add(m1 , m2);
}