const ones = require('../ones');

describe('ones function ', function () {

  it('should throw if first parameter(=rows) is undefined', function () {
    expect(function () { ones() }).toThrow();
  })

  it('should throw if parameters are not numbers', function () {
    expect(function () { ones('dummy') }).toThrow();

    expect(function () { ones(1, 'dummy') }).toThrow();
  })

  it('should throw if the rows or cols is zero' ,function(){
    expect(function(){ones(0,1)}).toThrow();
    
    expect(function(){ones(1,0)}).toThrow();
  })
  it('should return the square matrix N x N if only gets the first parameter ', function () {
    expect(ones(1)).toEqual([[1]]);

    expect(ones(3)).toEqual([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]);
  })

  it('should return the a matrix which contain only ones ', function () {
    expect(ones(3,2)).toEqual([
      [1,1],
      [1,1],
      [1,1]
    ]);

    expect(ones(1,2)).toEqual([[1,1]]);

  })
})