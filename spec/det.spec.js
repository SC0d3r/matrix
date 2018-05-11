const det = require('../src/det');

describe('det function', function () {
  let m;
  it('should throw if the arg is not a valid matrix', function () {
    m = [1, [1]];
    expect(function () { det(m) }).toThrow();
  })


  it('should throw if the given matrix is not valid for calculation determinant (matrix is not square)', function () {
    m = [1, 2];
    expect(function () { det(m) }).toThrow();
  })


  it('should calculate the determinant of square matrix', function () {
    // 1 x 1

    m = [1];
    expect(det(m)).toEqual(1);

    m = [[1]];
    expect(det(m)).toEqual(1);

    // 2 x 2

    m = [[1, 2], [3, 4]];
    expect(det(m)).toEqual(-2);

    // 3 x 3

    m = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
    expect(det(m)).toEqual(0);

    m = [[1, 1, 1], [1, 2, 2], [1, 3, 3]];
    expect(det(m)).toEqual(0);

    m = [[-1, 1, 1], [1, -2, 2], [1, -3, 3]];
    expect(det(m)).toEqual(-2);
    
    m = [[5, 4, 7], [4, 8, 2], [9, 0, 4]]
    expect(det(m)).toEqual(-336);
    // N x N
    
    m = [[-1, 1, 1, 1], [1, 2, 2, 2], [1, 3, 3, 3], [1, 4, 4, 4]];
    expect(det(m)).toBe(0);
    
    m = [[-1, 1, 3, 1], [1, -2, 2, 2], [1, 3, 3, 3], [1, 4, 4, 4]];
    expect(det(m)).toBeCloseTo(8);
    m = [[-1, 1, 3, 1, 4], [1, -2, 2, 2, 4], [1, 3, 3, 3, 4], [1, 4, 4, 4, 2], [-1, 1, 3, 1, 4]];
    expect(det(m)).toBe(0);
    // console.time('s');
    // det(m);
    // console.timeEnd('s');
  })
})