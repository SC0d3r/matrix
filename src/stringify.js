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

  const howManyEdge = cols === 1 ? 1 : 2;

  // this is an arithmetic progression a0 = 2 , n = cols , d = 3
  // an = a0 + (n - 1) * d;
  const howManySpace = Math.abs((2 + (cols - 1) * 3) - 3);

  let res = `\n ${'_'.repeat(howManyEdge)}${' '.repeat(howManySpace)}${'_'.repeat(howManyEdge)}\n`;

  for (let i = 0; i < _rows; i++) {

    res += '|';

    for (let j = 0; j < cols; j++) {
      res += ` ${m[i][j]} `;
    }

    if (i !== _rows - 1) res += '|\n';
    else res += '|';
  }

  res += `\n|${'_'.repeat(howManyEdge)}${'.'.repeat(howManySpace)}${'_'.repeat(howManyEdge)}| \n`;

  return res;
}