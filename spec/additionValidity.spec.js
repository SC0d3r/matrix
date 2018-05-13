const additionValidity = require('../additionValidity');

describe('additionValidity function' , function(){
  let m1,m2;
  it('should return false if two matrices are not valid for addition' ,function(){
    m1 = [1];
    m2 = [1 , 2];
    expect(additionValidity(m1 , m2)).toEqual(false);

    m1 = [[1,5] , [12,2]];
    m2 = [1 , 2];
    expect(additionValidity(m1 , m2)).toEqual(false);
    
    m1 = [[1] , [12]];
    m2 = [1 , 2];
    expect(additionValidity(m1 , m2)).toEqual(false);
  });

  it('should return true if two matrices are valid for addition' , function(){
    m1 = [1 , 12];
    m2 = [1 , 2];
    expect(additionValidity(m1 , m2)).toEqual(true);
  })
})