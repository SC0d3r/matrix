const { row, rows, columns, column } = require('../src/utils');

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

      m = [[1], [1]];
      expect(columns(m)).toEqual(1);
    });
  })

  describe('row function', function () {
    it('throw if no arg is provided', function () {
      expect(function () { row() }).toThrow();
    })
    it('should throw if given arguments are not valid', function () {
      m = [[1, 2], [3, 4]];
      expect(function () { row(m, 'dummy') }).toThrow();
    })
    it('should return the specified column as an array ', function () {
      m = [[1, 2], [3, 4]];
      expect(row(m, 1)).toEqual([3, 4]);
    })

  })

  describe('column function', function () {
    it('throw if no arg is provided', function () {
      expect(function () { column() }).toThrow();
    })
    it('should throw if given arguments are not valid', function () {
      m = [[1, 2], [3, 4]];
      expect(function () { column(m, 'dummy') }).toThrow();
    })
    it('should return the specified column as an array ', function () {
      m = [[1, 2], [3, 4]];
      expect(column(m, 1)).toEqual([2, 4]);
    })

  })
})