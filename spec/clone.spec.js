const clone = require('../src/clone');

describe('clone function', function () {
  let m;
  it('should throw if the given matrix is not valid', function () {
    m = [1, [2]];
    expect(function () { clone(m) }).toThrow();
  })

  it('should clone the given matrix', function () {
    m = [1];
    expect(clone(m)).toEqual([1]);

    m = [[1]];
    expect(clone(m)).toEqual([[1]]);

    m = [[1, 2], [3, 4]];
    expect(clone(m)).toEqual([[1, 2], [3, 4]]);
  })
})