const LU = require('../src/LU');

describe('LU function', function () {
  let m;
  let expectedUT, expectedLT;
  let lt, ut;

  it('should throw if the given matrix is not valid', function () {
    m = [1, [2]];
    expect(function () { UT(m) }).toThrow();
  })
  it('should return Lower triangular and Upper triangular of the given matrix', function () {
    m = [
      [3, 1],
      [4, 2]
    ];

    expectedUT = [
      [3, 1],
      [0, 0.6666666666666667]
    ];
    
    expectedLT = [
      [1, 0],
      [1.3333333333333333, 1]
    ];

    [lt, ut] = LU(m);

    expect(lt).toEqual(expectedLT);
    expect(ut).toEqual(expectedUT);


    m = [
      [3, 2, 3, 4],
      [4, 4, 3, 2],
      [1, 4, 4, 3],
      [2, 3, 1, 1]
    ];

    expectedUT = [
      [3, 2, 3, 4],
      [0, 1.3333333333333335, -1, -3.333333333333333],
      [0, -4.440892098500626e-16, 5.5, 9.999999999999998],
      [0, -2.0185873175002846e-16, 0, 2.045454545454545]
    ];

    expectedLT = [
      [1, 0, 0, 0],
      [1.3333333333333333, 1, 0, 0],
      [0.3333333333333333, 2.5, 1, 0],
      [0.6666666666666666, 1.25, 0.045454545454545456, 1]
    ];

    [lt, ut] = LU(m);

    expect(ut).toEqual(expectedUT);
    expect(lt).toEqual(expectedLT);

  });
})