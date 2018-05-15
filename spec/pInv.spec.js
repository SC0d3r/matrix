const pInv = require('../pInv');
const mul = require('../mul');
const clone = require('../clone');
const identity = require('../identity');

describe('pInv function', function () {
  let m;
  it('should throw if the given matrix is not valid', function () {
    m = [1, [2]];
    expect(function () { pInv(m) }).toThrow();
  })
  it('should throw if the given matrix is not a square matrix', function () {
    m = [1, 2];
    expect(function () { pInv(m) }).toThrow();
  })

  it('should return 0 if the det(matrix) is equal to zero', function () {
    m = [[1, 4], [1, 4]];
    expect(pInv(m)).toEqual(0);
  })

  it('should return the inverse of the given matrix ', function () {

    m = [[1, 2], [3, 4]];
    let inv_m = pInv(m);
    expect(inv_m).toEqual([[-2, 1], [1.5, -0.5]]);
    expect(mul([[1, 2], [3, 4]], inv_m)).toEqual(identity(2));


  });

  it('should not change the given matrix' , function(){
    m = [[1, 2], [3, 4]];
    let inv_m = pInv(m);
    expect(m).toEqual([[1, 2], [3, 4]]);
  })
})