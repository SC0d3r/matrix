const isArray = Array.isArray;

const isANumber = x => !isNaN(x) && typeof x === 'number';


function interchangeRows(m, row1, row2) {
  const temp = m[row2];
  m[row2] = m[row1];
  m[row1] = temp;
}

//returns the specified row
function row(validMatrix, _row) {
  if (!isArray(validMatrix)) {
    throw new Error('row(--> Here should be a valid matrix <-- , row_number)');
  }
  if (_row === undefined)
    throw new Error('row(validMatrix , --> Here should be the row number to fetch <--)');

  if (!isANumber(_row))
    throw new Error('row(validMatrix , --> Here should be the row number to fetch <--)');

  _row = Math.abs(_row);
  const matrix_rows = rows(validMatrix);

  if(_row >= matrix_rows){
    throw new Error('This matrix has only '+matrix_rows+' rows but requested row is '+_row);
  }
  
  const isTwoDim = isArray(validMatrix[0]);

  let result;
  if (isTwoDim)
    result = validMatrix[_row];
  else
    result = validMatrix;

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
    throw new Error('column(--> Here should be a valid matrix <-- , column_number)');
  }
  if (col === undefined)
    throw new Error('column(validMatrix , --> Here should be the column number to fetch <--)');
  if (!isANumber(col))
    throw new Error('column(validMatrix , --> Here should be the column number to fetch <--)');

  col = Math.abs(col);
  const matrix_cols = columns(validMatrix);

  if(col >= matrix_cols){
    throw new Error('This matrix has only '+matrix_cols+' columns but requested column is '+col);
  }

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
  isANumber, isArray,

  interchangeRows
}

