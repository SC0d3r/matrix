const isValid = require('./isValid');
const {common} = require('./messages');
const _det = require('./_det');

module.exports = function det(m) {
  if (!isValid(m))
    throw new Error(common);

  return _det(m);
}
