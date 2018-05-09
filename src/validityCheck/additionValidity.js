const isArray = Array.isArray;
const isValid = require('./isValid');

module.exports = function additionValidity(m1, m2) {
  const areBothValid = isValid(m1) && isValid(m2);
  if (!areBothValid) return false;

  const [rowM1 , colM1] = [rows(m1) , columns(m1)];
  const [rowM2 , colM2] = [rows(m2) , columns(m2)];

  return (rowM1 === rowM2) && (colM1 === colM2);
}

function rows(ValidMatrix) {
  return ValidMatrix.length;
}
function columns(ValidMatrix) {
  const x = ValidMatrix[0];
  if (!isArray(x)) return 1;

  // cause in valid matrix all the columns have the same length
  return x.length;
}