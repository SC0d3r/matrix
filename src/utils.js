// turns [[1] , [2]] => into [1,2]
const isArray = Array.isArray;

exports.flattenOneLevel = function(arr){
  const res = [];
  for(let i = 0;i < arr.length; i++) {
    const x = arr[i];
    if(isArray(x)) res.push(x[0]);
    else res.push(x);
  }
  return res;
}


exports.isSemi2D = function(arr) {
  const hasArray = isArray(arr[0]);
  const hasOneLengthCol = hasArray && arr[0].length === 1;
  return hasOneLengthCol;
}

exports.isArray = Array.isArray;