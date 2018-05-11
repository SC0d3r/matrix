const identity = require('../src/identity');

describe('identity function', function () {
  it('should throw if the first argument is not provided', function () {
    expect(function () { identity() }).toThrow();
  })
  it('should throw if the first argument is not a number', function () {
    expect(function () { identity('duumy') }).toThrow();
  })

  it('should create an n*n identity matrix', function () {
    expect(identity(2)).toEqual([[1, 0], [0, 1]]);

    expect(identity(3)).toEqual([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  })
})