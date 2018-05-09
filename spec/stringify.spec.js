const stringify = require('../src/stringify');

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
    expect(strRepr).toContain('***');

    m1 = [[1, 2],[3,4]];
    strRepr = stringify(m1);
    
    expect(strRepr).toContain('1');
    expect(strRepr).toContain('2');
    expect(strRepr).toContain('3');
    expect(strRepr).toContain('4');
    expect(strRepr).toContain('**');
  })
})