const LU = require('./LU');
const clone = require('./clone');

module.exports = function PLU(m){
  return LU(clone(m));
}