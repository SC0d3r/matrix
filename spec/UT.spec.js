const UT = require('../src/UT');

describe('UT function', function () {
  let m;
  it('should throw if the given matrix is not valid', function () {
    m = [1, [2]];
    expect(function () { UT(m) }).toThrow();
  })
  it('should change the given matrix into upper triangle matrix', function () {

    m = [
      [3, 2, 3, 4],
      [4, 4, 3, 2],
      [1, 4, 4, 3],
      [2, 3, 1, 1]
    ];

    const expectedResult = [
      [3, 2, 3, 4],
      [0, 1.3333333333333335, -1, -3.333333333333333],
      [0, -4.440892098500626e-16, 5.5, 9.999999999999998],
      [0, -2.0185873175002846e-16, 0, 2.045454545454545]
    ];

    expect(UT(m)).toEqual(expectedResult);
  })
})