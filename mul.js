const isValid = require('./isValid');
const messages = require('./messages.json');
const { columns, rows } = require('./utils');
const _mul = require('./_mul');


module.exports = function mul(m1, m2, precision = 5) {
  if (!isValid(m1) || !isValid(m2))
    throw new Error(messages.default);

  if (!validDimforMul(m1, m2))
    throw new Error('Matrices dont have valid dim for multiplication');

  return _mul(m1 , m2 , precision);
}


function validDimforMul(m1, m2) {
  return columns(m1) === rows(m2);
}