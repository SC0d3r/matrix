const isValid = require('./isValid');
const {common} = require('./messages');
const _transpose = require('./_transpose');

module.exports = function transpose(m) {
  if (!isValid(m))
    throw new Error(common);

  return _transpose(m);
}