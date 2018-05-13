const scale = require('../scale');

describe('scale function' , function(){
  let m;
  it('should throw if matrix is not valid' , function(){
    m = [1 , [2]];
    expect(function(){scale(m , 2)}).toThrow();
  })
  it('should throw if the value for scaling is not numeric' , function(){
    m = [1,2];
    expect(function(){scale(m , 'not a numeric value')}).toThrow();
  })
  it('should scale the matrix by the given number' , function(){
    m = [1,2];
    expect(scale(m , 3)).toEqual([3 , 6]);

    m = [[1,2] , [3,4]];
    expect(scale(m , 2)).toEqual([[2,4] ,[6,8]]);
  })
})