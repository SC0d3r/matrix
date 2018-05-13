const _LU = require('./_LU');
const _clone = require('./_clone');

module.exports = function _PLU(m){
  return _LU(_clone(m));
}