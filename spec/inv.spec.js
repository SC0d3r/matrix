const inv = require('../inv');
const mul = require('../mul');
const clone = require('../clone');
const identity = require('../identity');

describe('inv function', function () {
  let m;
  it('should throw if the given matrix is not valid', function () {
    m = [1, [2]];
    expect(function () { inv(m) }).toThrow();
  })
  it('should throw if the given matrix is not a square matrix', function () {
    m = [1, 2];
    expect(function () { inv(m) }).toThrow();
  })

  it('should throw if the det(matrix) is equal to zero', function () {
    m = [[1, 4], [1, 4]];
    expect(function () { inv(m) }).toThrow();
  })

  it('should return the inverse of the given matrix ', function () {

    m = [[1, 2], [3, 4]];
    let inv_m = inv(m);
    expect(inv_m).toEqual([[-2, 1], [1.5, -0.5]]);
    expect(mul([[1, 2], [3, 4]], inv_m)).toEqual(identity(2));

    m = [[1, 1, -1], [2, -2, -2], [-1, 1, -3]];
    inv_m = inv(clone(m));
    expect(inv_m).toEqual([
      [0.5, 0.125, -0.25],
      [0.5, -0.25, 0],
      [0, -0.125, -0.25]
    ]);
    expect(mul(m, inv_m)).toEqual(identity(3));

    m = [[1, 1, 1], [-1, 1, 1], [2, 1, -1]];
    inv_m = inv(clone(m));
    expect(inv_m).toEqual([
      [0.5, -0.5, 0],
      [-0.25, 0.75, 0.5],
      [0.75, -0.25, -0.5]
    ]);
    expect(mul(m, inv_m)).toEqual(identity(3));


    m = [[1, 1, 1, 1], [-1, 1, 1, 1], [2, 1, -1, 1], [1, 2, 1, 1]];
    inv_m = inv(clone(m));
    expect(inv_m).toEqual([
      [0.5, -0.5, 0, 0],
      [-1, 0, 0, 1],
      [0.75, -0.25, -0.5, 0],
      [0.75, 0.75, 0.5, -1]
    ]);
    expect(mul(m, inv_m)).toEqual(identity(4));


  })
})