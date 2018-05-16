const { row, rows, columns, column, interchangeRows } = require('../utils');

describe('utils functions --> ', function () {

  describe('interchangeRows : ', function () {
    let m;
    it('should swap the rows of the given matrix', function () {
      m = [[1, 2], [3, 4]];
      interchangeRows(m, 0, 1);
      expect(m).toEqual([[3, 4], [1, 2]]);
    })
  })

  describe('rows : ', function () {
    it('should return the matrix(= valid matrix) rows', function () {
      let m = [1, 2];
      expect(rows(m)).toEqual(1);

      m = [[1], [1]];
      expect(rows(m)).toEqual(2);
    })
  })


  describe('columns : ', function () {
    it('should return the matrix(= valid matrix) columns', function () {
      let m = [1, 2];
      expect(columns(m)).toEqual(2);

      m = [[1], [1]];
      expect(columns(m)).toEqual(1);
    });
  })

  describe('row : ', function () {
    it('throw if no arg is provided', function () {
      expect(function () { row() }).toThrow();
    })
    it('should throw if given arguments are not valid', function () {
      m = [[1, 2], [3, 4]];
      expect(function () { row(m, 'dummy') }).toThrow();
    })
    it('should throw if the requested row is bigger than matrix rows', function () {
      m = [1, 2];
      expect(function () { row(m, 3) }).toThrow();
    })
    it('should throw if the second arg(= which row) is not provided', function () {
      m = [1, 2];
      expect(function () { row(m) }).toThrow();
    })
    it('should return the specified column as an array ', function () {
      m = [1];
      expect(row(m, 0)).toEqual([1]);

      m = [1, 3];
      expect(row(m, 0)).toEqual([1, 3]);

      m = [[1]];
      expect(row(m, 0)).toEqual([1]);

      m = [[1, 2], [3, 4]];
      expect(row(m, 0)).toEqual([1, 2]);
      expect(row(m, 1)).toEqual([3, 4]);
    })

  })

  describe('column : ', function () {
    it('throw if no arg is provided', function () {
      expect(function () { column() }).toThrow();
    })
    it('should throw if given arguments are not valid', function () {
      m = [[1, 2], [3, 4]];
      expect(function () { column(m, 'dummy') }).toThrow();
    })
    it('should throw if the requested column is bigger than matrix columns', function () {
      m = [1, 2];
      expect(function () { column(m, 3) }).toThrow();
    })
    it('should throw if the second arg(= which column) is not provided', function () {
      m = [1, 2];
      expect(function () { column(m) }).toThrow();
    })
    it('should return the specified column as an array ', function () {
      m = [1];
      expect(column(m, 0)).toEqual([1]);

      m = [1, 2];
      expect(column(m, 1)).toEqual([2]);

      m = [[1]];
      expect(row(m, 0)).toEqual([1]);

      m = [[1, 2], [3, 4]];
      expect(column(m, 1)).toEqual([2, 4]);
    })

  })
})