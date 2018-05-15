const isValid = require('./isValid');
const {common , multiplicationDimensionErrorMessage} = require('./messages');
const { columns, rows } = require('./utils');
const _mul = require('./_mul');


module.exports = function mul(m1, m2, precision = 5) {
  if (!isValid(m1) || !isValid(m2))
    throw new Error(common);

  if (!validDimforMul(m1, m2))
    throw new Error(multiplicationDimensionErrorMessage);

  return _mul(m1 , m2 , precision);
}


function validDimforMul(m1, m2) {
  return columns(m1) === rows(m2);
}