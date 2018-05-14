

module.exports = function _random(rows, cols, randGen) {

  randGen = randGen || Math.random;
  
  const resultMatrix = [];

  for (let i = 0; i < rows; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < cols; j++) {
      resultMatrix[i][j] = randGen(i,j);
    }
  }

  return resultMatrix;
}