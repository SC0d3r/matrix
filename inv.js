const isValid = require('./isValid');
const {common} = require('./messages');

const _inv = require('./_inv');

module.exports = function inv(m) {
  if (!isValid(m))
    throw new Error(common);
  
  return _inv(m);
} 