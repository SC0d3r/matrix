const _det = require('./_det');
const _clone  = require('./_clone');

module.exports = function _pDet(m) {
  return _det(_clone(m));
}