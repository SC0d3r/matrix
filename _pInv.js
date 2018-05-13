const _inv = require('./_inv');
const _clone = require('./_clone');

module.exports = function _pInv(m) {
  return _inv(_clone(m));
}