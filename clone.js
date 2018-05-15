const isValid = require('./isValid');
const {common} = require('./messages');
const _clone = require('./_clone');

module.exports = function clone(m) {
  if (!isValid(m))
    throw new Error(common);

  return _clone(m);
}