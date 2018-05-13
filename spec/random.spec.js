const random = require('../random');

describe('random function',function(){
  it('should throw if the first argument is not a number' , function(){
    expect(function(){random('dummy')}).toThrow();
  })
  it('should throw if the second argument is provided and it is not a function or number' , function(){
    expect(function(){random(1,'2')}).toThrow();
    function rand(){};
    expect(function(){random(1,rand)}).not.toThrow();
  })
  it('should throw if the third argument is provided and it is not a function' , function(){
    expect(function(){random(1,3,4)}).toThrow();
  })

  it('should return a random x*x generated matrix with only one parameter',function(){
    let res = random(2);
    expect(res[0].length).toEqual(2);
    expect(res[1].length).toEqual(2);

    res = random(1);// returns [[0 <= x < 1]]
    expect(res[0].length).toEqual(1);
  })

  it('should return a random n*m generated matrix with two parameters',function(){
    let res = random(2,3);
    expect(res[0].length).toEqual(3);
    expect(res[1].length).toEqual(3);

    res = random(1,2);// returns [[0 <= x1 < 1,0 <= x2 < 1]]
    expect(res[0].length).toEqual(2);
  });

  it('should get a function and use that as a generator for random numbers',function(){
    const rand = () => 1;
    res = random(2,rand);
    expect(res[0].length).toEqual(2);
    expect(res[1].length).toEqual(2);
    expect(res).toEqual([[1,1] ,[1,1]]);
  })
})