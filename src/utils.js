const isArray = Array.isArray;

const isANumber = x => !isNaN(x) && typeof x === 'number';

//returns the specified row
function row(validMatrix, _row) {
  if (!isArray(validMatrix)) {
    throw new Error('first arg should be a valid matrix');
  }
  if (_row === undefined)
    throw new Error('you must provide a second argument(which row)');

  if (!isANumber(_row))
    throw new Error('Second Argument must be a number');

  _row = Math.abs(_row);

  const result = validMatrix[_row];
  return isArray(result) ? result : [result];
}

// every inner array is considered a row
// returns the number of rows
function rows(ValidMatrix) {
  const x = ValidMatrix[0];
  if (!isArray(x)) return 1;


  return ValidMatrix.length;
}

// returns the specified column
function column(validMatrix, col) {
  if (!isArray(validMatrix)) {
    throw new Error('first arg should be a valid matrix');
  }
  if (col === undefined)
    throw new Error('you must provide a second argument(which column)');
  if (!isANumber(col))
    throw new Error('Argument must be a number');

  col = Math.abs(col);

  const _rows = rows(validMatrix);
  const column = [];
  for (let i = 0; i < _rows; i++) {
    const innerRow = validMatrix[i];
    if (isArray(innerRow))
      column.push(validMatrix[i][col]);
    else
      column.push(validMatrix[col]);
  }
  return column;
}

// every ',' in matrix array is considered a column
// returns the number of columns
function columns(ValidMatrix) {
  const x = ValidMatrix[0];
  if (!isArray(x)) return ValidMatrix.length;


  return x.length;
}




module.exports = {
  row, rows,
  column, columns,
  isANumber, isArray
}

