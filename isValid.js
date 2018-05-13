const invalidityReasoner = require('./invalidityReasoner');

module.exports  = function isValid(matrix) {
  const invalidityReasons = invalidityReasoner(matrix);
  return invalidityReasons.length === 0;
}