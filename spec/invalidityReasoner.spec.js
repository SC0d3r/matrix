const invalidityReasoner = require("../invalidityReasoner");

describe('invalidityReasoner function' , function(){
  let mat;
  it('should return and string if matrix is not valid' , function(){
    mat = 1;
    expect(invalidityReasoner(mat)).toEqual(jasmine.any(String));
  }); 

  it('should return string with length > 0 if passes matrix is not valid' , function(){
    mat = {};
    expect(invalidityReasoner(mat).length).toBeGreaterThan(0);

    mat = [];
    expect(invalidityReasoner(mat).length).toBeGreaterThan(0);

    mat = [1,[2]];
    expect(invalidityReasoner(mat).length).toBeGreaterThan(0);

    mat = [[1],[2] , [1,2]];
    expect(invalidityReasoner(mat).length).toBeGreaterThan(0);
  });

  it('should return a string with length 0 if matrix is valid' , function(){
    mat = [1];
    expect(invalidityReasoner(mat)).toEqual("");

    mat = [[1] , [2]];
    expect(invalidityReasoner(mat)).toEqual("");
  })

})