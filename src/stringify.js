const isValid = require('./validityCheck/isValid');
const { isArray, columns, rows } = require('./utils');

module.exports = function stringify(m) {
  if (!isValid(m))
    throw new Error('Not a valid matrix');

  const isTwoDim = isArray(m[0]);

  return isTwoDim ? stringify2D(m) : rowMatrix(m);
}

function rowMatrix(m) {
  const cols = columns(m);
  let res = `[ `;
  for (let i = 0; i < cols; i++) {
    res += `  ${m[i]}  `;
  }
  res += ` ]`;
  return res;
}

function stringify2D(m) {
  const cols = columns(m);
  const _rows = rows(m);
  let res = `\n ${'_'.repeat(cols % 2 || cols)}${' '.repeat(cols)}${'_'.repeat(cols % 2 || cols)}\n`;
  for (let i = 0; i < _rows; i++) {
    res += '|';
    for (let j = 0; j < cols; j++) {
      res += ` ${m[i][j]} `;
    }
    if (i !== _rows - 1) res += '|\n';
    else res += '|';
  }
  res += `\n|${'_'.repeat(cols % 2 || cols)}${'*'.repeat(cols)}${'_'.repeat(cols % 2 || cols)}| \n`;
  return res;
}