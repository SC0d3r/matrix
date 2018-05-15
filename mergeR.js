const isValid = require('./isValid');
const {common} = require('./messages');
const _mergeR = require('./_mergeR');

module.exports = function mergeR(lM, rM) {
  if (
    !isValid(lM) ||
    !isValid(rM)
  )
    throw new Error(common);

  return _mergeR(lM, rM);
}