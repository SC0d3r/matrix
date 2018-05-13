const pDet = require('../pDet');

describe('pDet function', function () {
  let m;
  it('should throw if the arg is not a valid matrix', function () {
    m = [1, [1]];
    expect(function () { pDet(m) }).toThrow();
  })


  it('should throw if the given matrix is not valid for calculation determinant (matrix is not square)', function () {
    m = [1, 2];
    expect(function () { pDet(m) }).toThrow();
  })


  it('should calculate the determinant of square matrix', function () {
    // 1 x 1

    m = [1];
    expect(pDet(m)).toEqual(1);

    m = [[1]];
    expect(pDet(m)).toEqual(1);

    // 2 x 2

    m = [[1, 2], [3, 4]];
    expect(pDet(m)).toEqual(-2);

    // 3 x 3

    m = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
    expect(pDet(m)).toEqual(0);

    m = [[1, 1, 1], [1, 2, 2], [1, 3, 3]];
    expect(pDet(m)).toEqual(0);

    m = [[-1, 1, 1], [1, -2, 2], [1, -3, 3]];
    expect(pDet(m)).toEqual(-2);

    m = [[5, 4, 7], [4, 8, 2], [9, 0, 4]]
    expect(pDet(m)).toEqual(-336);

  })

  it('should not change the given matrix N x N | N >= 4', function () {
    m = [[5, 4, 7, 1], [4, 8, 2, 4], [9, 0, 4, 5], [9, 0, 4, 5]];
    const d = pDet(m);

    expect(m).toEqual([
      [5, 4, 7, 1],
      [4, 8, 2, 4],
      [9, 0, 4, 5],
      [9, 0, 4, 5]
    ]);
  })
})