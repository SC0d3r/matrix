const transpose = require('../transpose');

describe('transpose function', function () {
  let m;
  it('should throw if the matrix is not valid', function () {
    m = [1, [33]];
    expect(function () { transpose(m) }).toThrow();
  });

  it('should transpose the given matrix(a valid one)', function () {
    m = [1, 2];
    expect(transpose(m)).toEqual([[1], [2]]);
    
    m = [[1, 2], [3, 4]];
    expect(transpose(m)).toEqual([[1 , 3], [2 , 4]]);
  })
});