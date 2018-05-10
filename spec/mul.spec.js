const mul = require('../src/mul');

describe('mul function', function () {
  let m1, m2;
  it('should throw if matrices are not valid', function () {
    m1 = [1, [2]];
    m2 = [1, 2];
    expect(function () { mul(m, 2) }).toThrow();
  });

  it('should throw if matrices dont have valid dim to get multiplied', function () {
    m1 = [1, 2];
    m2 = [1, 2, 3];
    expect(function () { mul(m1, m2) }).toThrow();

    m1 = [1, 2];
    m2 = [3, 4];
    expect(function () { mul(m1, m2) }).toThrow();
  })

  it('should multiply two matrices', function () {
    m1 = [1, 2];
    m2 = [[3], [4]];
    expect(mul(m1, m2)).toEqual([11]);

    m1 = [[1, 2], [3, 4]];
    m2 = [[1, 2, 3], [2, 3, 4]];
    expect(mul(m1, m2)).toEqual([[5, 8, 11], [11, 18, 25]]);


    m1 = [[1, 2], [3, 4]];
    m2 = [[5, 6], [7, 8]];
    expect(mul(m1, m2)).toEqual([[19, 22], [43, 50]]);

    m1 = [[1, 2, 3], [4, 5, 6]];
    m2 = [[1, 2], [3, 4], [5, 6]];
    expect(mul(m1, m2)).toEqual([[22, 28], [49, 64]]);
  })
})