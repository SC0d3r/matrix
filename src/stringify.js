const isValid = require('./validityCheck/isValid');
const {isSemi2D , isArray} = require('./utils');

module.exports = function stringify(m) {
  if (!isValid(m))
    throw new Error('Not a valid matrix');

  if (isSemi2D(m)) m = flattenOneLevel(m);

  const isTwoDim = isArray(m[0]);

  return isTwoDim ? stringify2D(m) : columnMatrix(m);
}

function columnMatrix(m){
  const rows = m.length;
  let res = `\n _${' '.repeat(3)}_\n`;
  for (let i = 0; i < rows; i++) {
    res += '|';
    res += `  ${m[i]}  `;
    if(i !== rows - 1) res += '|\n';
    else res += '|';
  }
  res += `\n|_${'*'.repeat(3)}_| \n`;
  return res;
}

function stringify2D(m){
  const cols = m[0].length;
  const rows = m.length;
  let res = `\n __${' '.repeat(cols)}__\n`;
  for (let i = 0; i < rows; i++) {
    res += '|';
    for (let j = 0; j < cols; j++) {
      res += ` ${m[i][j]} `;
    }
    if(i !== rows - 1) res += '|\n';
    else res += '|';
  }
  res += `\n|__${'*'.repeat(cols)}__| \n`;
  return res;
}