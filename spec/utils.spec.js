const { rows, columns } = require('../src/utils');

describe('utils functions : ', function () {
  describe('rows function', function () {
    it('should return the matrix(= valid matrix) rows', function () {
      let m = [1, 2];
      expect(rows(m)).toEqual(1);

      m = [[1], [1]];
      expect(rows(m)).toEqual(2);
    })
  })


  describe('columns function', function () {
    it('should return the matrix(= valid matrix) columns', function () {
      let m = [1, 2];
      expect(columns(m)).toEqual(2);

      m = [[1] , [1]];
      expect(columns(m)).toEqual(1);
    });
  })
})