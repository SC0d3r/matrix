

module.exports = function _random(row, col, randGen) {

  randGen = randGen || Math.random;
  
  const resultMatrix = [];

  for (let i = 0; i < row; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < col; j++) {
      resultMatrix[i][j] = randGen(i,j);
    }
  }

  return resultMatrix;
}