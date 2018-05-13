const isValid = require('./isValid');
const messages = require('./messages.json');
const _mergeR = require('./_mergeR');

module.exports = function mergeR(lM, rM) {
  if (
    !isValid(lM) ||
    !isValid(rM)
  )
    throw new Error(messages.default);

  return _mergeR(lM, rM);
}