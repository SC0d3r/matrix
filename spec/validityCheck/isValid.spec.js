const valid = require("../../src/validityCheck/isValid");

describe('valid function' , function(){
  let mat;
  it('should return false if matrix is not valid' , function(){
    mat = 1;
    expect(valid(mat)).toEqual(false);
    mat = {};
    expect(valid(mat)).toEqual(false);
    mat = [];
    expect(valid(mat)).toEqual(false);
  }); 
  
  it('should return true if passed matrix is valid' , function(){
    mat = [1];
    expect(valid(mat)).toEqual(true);
  });


})