const mergeR = require('../src/mergeR');

describe('mergeR function ', function () {
  let m1, m2;
  it('should throw if matrices are not valid', function () {
    m1 = [1, [2]];
    m2 = [3, 3];
    expect(function () { mergeR(m1, m2) }).toThrow();

  })

  it('should throw if matrices have different number of rows', function () {
    m1 = [1, 2];
    m2 = [[3], [4]];
    expect(function () { mergeR(m1, m2) }).toThrow();
  })

  it('should merge two matrices and return new matrix', function () {
    m1 = [1, 2];
    m2 = [3, 4];
    expect(mergeR(m1, m2)).toEqual([1, 2, 3, 4]);

    m1 = [[1, 2]];
    m2 = [[3, 4]];
    expect(mergeR(m1, m2)).toEqual([[1, 2, 3, 4]]);


    m1 = [[1, 2], [3, 4]];
    m2 = [[5, 5], [5, 5]];

    expect(mergeR(m1, m2)).toEqual([
      [1, 2, 5, 5],
      [3, 4, 5, 5]]
    );

    m1 = [[1, 2], [3, 4]];
    m2 = [[5, 5 , 6], [5, 5 , 7]];

    expect(mergeR(m1, m2)).toEqual([
      [1, 2, 5, 5 , 6],
      [3, 4, 5, 5 , 7]]
    );


  })
})