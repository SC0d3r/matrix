const mergeR= require('./mergeR');

function mergeL(lM, rM) {
  return mergeR(rM , lM);
}

module.exports = mergeL;
