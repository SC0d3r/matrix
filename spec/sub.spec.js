const sub = require('../sub');

describe('sub function', function () {
  let m1, m2;
  it('should throw if the martices passed in is invalid', function () {
    m1 = [1];
    m2 = [1, [2]];
    expect(function () { sub(m1, m2) }).toThrow();
  })

  it('should subtract elementwise two matrices ', function () {
    m1 = [1, 2];
    m2 = [3, 4];

    expect(sub(m1, m2)).toEqual([-2, -2]);

    m1 = [[1, 2], [-1, 5]];
    m2 = [[3, 4], [3, -1]];

    expect(sub(m1, m2)).toEqual([[-2, -2], [-4, 6]]);
  })
})