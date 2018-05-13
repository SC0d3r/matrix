const det = require('./det');
const clone  = require('./clone');

module.exports = function pDet(m) {
  return det(clone(m));
}