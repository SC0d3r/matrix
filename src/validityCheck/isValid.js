const invalidityReasoner = require('./invalidityReasoner');

module.exports  = function valid(matrix) {
  const invalidityReasons = invalidityReasoner(matrix);
  return invalidityReasons.length === 0;
}