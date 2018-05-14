const zeros = require('../zeros');

describe('zeros function ', function () {

  it('should throw if first parameter(=rows) is undefined', function () {
    expect(function () { zeros() }).toThrow();
  })

  it('should throw if parameters are not numbers', function () {
    expect(function () { zeros('dummy') }).toThrow();

    expect(function () { zeros(1, 'dummy') }).toThrow();
  })

  it('should throw if the rows or cols is zero', function () {
    expect(function () { zeros(0, 1) }).toThrow();

    expect(function () { zeros(1, 0) }).toThrow();
  })
  it('should return the square matrix N x N if only gets the first parameter ', function () {
    expect(zeros(1)).toEqual([[0]]);

    expect(zeros(3)).toEqual([
      [0, 0, 0], [0, 0, 0], [0, 0, 0]
    ]);
  })

  it('should return the a matrix which contain only zeros ', function () {
    expect(zeros(3,2)).toEqual([
      [0,0],
      [0,0],
      [0,0]
    ]);

    expect(zeros(1,2)).toEqual([[0,0]]);

  })
})