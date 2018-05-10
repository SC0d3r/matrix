const add  = require('../src/add');

describe("Add function" , function(){
  let m1,m2;
  it('throws an Error if two matrices are not valid for addition' ,function(){
    m1 = [1];
    m2 = [1,2];
    expect(function(){add(m1 , m2)}).toThrow();

    m1 = [[1] , [1]];
    m2 = [12,2];
    expect(function(){add(m1 , m2)}).toThrow();
  });
  it('takes two matrices and add them togather' , function(){
    m1 = [1 , 1];
    m2 = [12,2];
    expect(add(m1 , m2)).toEqual([13 , 3]);

    m1 = [[1,2] , [3,5]];
    m2 = [[1,1] , [2,2]];
    expect(add(m1 , m2)).toEqual([[2 , 3] , [5 , 7]]);

  });
});