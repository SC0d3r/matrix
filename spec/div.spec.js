const div = require('../src/div');

describe('div function',function(){
  let m1,m2;
  it('should throw if any of the two matrices are not valid',function(){
    m1 = [1,2];
    m2 = [2,[2]];
    expect(function(){div(m1,m2)}).toThrow();
  });

  it('should throw if matrices dont have the same dimension for division', function(){
    m1 = [1,2,3];
    m2 = [2,2];
    expect(function(){div(m1 , m2)}).toThrow();
  })

  it('should divide two matrices element wise', function(){
    m1 = [1 , 2];
    m2 = [2 ,2];
    expect(div(m1 , m2)).toEqual([0.5 , 1]);
  })
})