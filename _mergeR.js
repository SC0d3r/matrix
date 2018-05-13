const { isArray, columns, row,rows } = require('./utils');

function _mergeR(lM, rM) {

  const lM_rows = rows(lM);
  const rM_rows = rows(rM);

  const lM_cols = columns(lM);
  const rM_cols = columns(rM);

  if (lM_rows !== rM_rows)
    throw new Error('matrices should have the same number of rows for merging');

  const mergedMatrix_rows = lM_rows;
  const mergedMatrix_cols = Math.max(lM_cols, rM_cols);

  const mergedMatrix = [];
  
  
  
  for (let i = 0; i < mergedMatrix_rows; i++) {
    mergedMatrix[i] = row(lM , i).slice().concat(row(rM , i).slice());
  }

  const isTwoDim = isArray(lM[0]) || isArray(rM[0]);

  // this ternary statement is for preserving the dimension
  // ex : A matrix with 1 row and 4 columns
  //  rm = [1,2];lm = [3,4] => merge returns => [1,2,3,4];
  //  rm = [[1,2]];lm = [[3,4]] => merge returns => [[1,2,3,4]];

  return (mergedMatrix_rows === 1 && !isTwoDim) ? mergedMatrix[0] : mergedMatrix;
}

module.exports = _mergeR;
