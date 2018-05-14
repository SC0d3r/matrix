const _random = require('./_random');

function one(){return 1;}

module.exports = function _ones(rows , cols){
  return _random(rows , cols , one);
}