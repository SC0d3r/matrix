const _random = require('./_random');

function zero(){return 0;}

module.exports = function _zeros(rows , cols){
  return _random(rows , cols , zero);
}