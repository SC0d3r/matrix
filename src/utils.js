const isArray = Array.isArray;
exports.isArray = Array.isArray;

// every ',' in matrix array is considered a column
exports.columns = function(ValidMatrix) {
  const x = ValidMatrix[0];
  if (!isArray(x)) return ValidMatrix.length;

  
  return x.length;
}

// every inner array is considered a row
exports.rows = function(ValidMatrix) {
  const x = ValidMatrix[0];
  if (!isArray(x)) return 1;

  
  return ValidMatrix.length;
}