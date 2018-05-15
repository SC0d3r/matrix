const _add = require('./_add');
const additionValidity = require('./additionValidity');
const {common} = require('./messages');


module.exports = function add(m1 , m2){
  if (!additionValidity(m1, m2))
    throw new Error(common);

  return _add(m1 , m2);
}