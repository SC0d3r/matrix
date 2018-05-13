const _mergeR= require('./_mergeR');

function _mergeL(lM, rM) {
  return _mergeR(rM , lM);
}

module.exports = _mergeL;
