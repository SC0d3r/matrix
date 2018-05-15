const additionValidity = require('./additionValidity');
const {common} = require('./messages');

const _sub = require('./_sub');

module.exports = function sub(m1, m2) {
  if (!additionValidity(m1, m2))
    throw new Error(common);

  return _sub(m1, m2);
}