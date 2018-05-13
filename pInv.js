const inv = require('./inv');
const clone = require('./clone');

module.exports = function pInv(m) {
  return inv(clone(m));
}