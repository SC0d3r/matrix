const mergeL = require('../mergeL');

describe('mergeL function ', function () {
  let m1, m2;
  it('should throw if matrices are not valid', function () {
    m1 = [1, [2]];
    m2 = [3, 3];
    expect(function () { mergeL(m1, m2) }).toThrow();

  })

  it('should throw if matrices have different number of rows', function () {
    m1 = [1, 2];
    m2 = [[3], [4]];
    expect(function () { mergeL(m1, m2) }).toThrow();
  })

  it('should merge two matrices and return new matrix', function () {
    m1 = [1, 2];
    m2 = [3, 4];
    expect(mergeL(m1, m2)).toEqual([3, 4, 1, 2]);

    m1 = [[1, 2]];
    m2 = [[3, 4]];
    expect(mergeL(m1, m2)).toEqual([[3, 4, 1, 2]]);


    m1 = [[1, 2], [3, 4]];
    m2 = [[5, 5], [5, 5]];

    expect(mergeL(m1, m2)).toEqual([
      [5, 5, 1, 2],
      [5, 5, 3, 4]]
    );

    m1 = [[1, 2], [3, 4]];
    m2 = [[5, 5, 6], [5, 5, 7]];

    expect(mergeL(m1, m2)).toEqual([
      [5, 5, 6 , 1 , 2],
      [5, 5, 7 , 3 , 4]]
    );


  })
})