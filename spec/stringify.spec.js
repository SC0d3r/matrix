const stringify = require('../stringify');

describe('stringify functin', function () {
  it('should throw if the martix is not a valid one', function () {
    let m1 = [1, [2]];
    expect(function () { stringify(m1) }).toThrow();
  })

  it('should return string repr of the martix in 2d way', function () {
    let m1 = [1, 2];
    let strRepr = stringify(m1);
    
    expect(strRepr).toContain('1');
    expect(strRepr).toContain('2');
    expect(strRepr).toContain('[');
    expect(strRepr).toContain(']');

    m1 = [[1, 2],[3,4]];
    strRepr = stringify(m1);
    
    expect(strRepr).toContain('1');
    expect(strRepr).toContain('2');
    expect(strRepr).toContain('3');
    expect(strRepr).toContain('4');
    expect(strRepr).toContain('..');
    
    m1 = [[1],[2]];
    strRepr = stringify(m1);
    
    expect(strRepr).toContain('1');
    expect(strRepr).toContain('2');
    expect(strRepr).toContain('.');
    
    m1 = [[1,2,3],[4,5,6]];
    strRepr = stringify(m1,4);
    
    m1 = [[1,2,3,4],[4,5,6,2]];
    strRepr = stringify(m1);
    
    m1 = [[1,2,3,4,5],[4,5,6,2,4]];
    strRepr = stringify(m1);
    
    m1 = [[1,2,3,4,5,1],[4,5,6,2,4,7]];
    strRepr = stringify(m1);
    
    m1 = [[1,2,3,4,5,1],[4,5,6,2,4,7],[4,5,6,2,4,7]];
    strRepr = stringify(m1);
    
    m1 = [[1,2,3,4,5,1],[4,5,6,2,4,7],[4,5,6,2,4,7],[4,5,6,2,4,7]];
    strRepr = stringify(m1);
    // console.log(strRepr);
  })
})