const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const clone = require('./clone');
const det = require('./det');
const identity = require('./identity');
const mergeR = require('./mergeR');
const LU = require('./LU');
const mul = require('./mul');

const {
  isArray,
  column, columns,
  row, rows,
  interchangeRows } = require('./utils');


module.exports = function inv(m) {
  if (!isValid(m))
    throw new Error(messages.default);

  const _rows = rows(m);
  const cols = columns(m);

  if (_rows !== cols)
    throw new Error('for calculating inverse you have to pass a square matrix(n x n)');

  let determinant;
  if (_rows > 3)
    determinant = det(clone(m));
  else
    determinant = det(m);

  if (determinant === 0)
    throw new Error('det(Matrix) = 0 , so this matrix is not invertable');


  const [lt, ut] = LU(m);
  
  
  const In = identity(_rows);

  const ut_In = mergeR(ut, In);
  const lt_In = mergeR(lt , In);
  
  const inv_lt_In = inverseLT_In(lt_In, _rows);
  const inv_ut_In = inverseUT_In(ut_In, _rows);
  
  const inv_lt = extractInv(inv_lt_In , _rows);
  const inv_ut = extractInv(inv_ut_In , _rows);
  

  return mul(inv_ut , inv_lt);
}

function extractInv(In_Inv , rows){
  const inv = [];
  for(let i = 0;i < rows;i++){
    inv[i] = [];
    for(let j = rows;j < 2 * rows;j++){
      inv[i][j % rows] = In_Inv[i][j];
    }
  }
  return inv;
}

function inverseLT_In(UT_In, rows) {
  let j = 0;
  for (let i = 0; i < rows; i++) {
    let k = i;
    let pivot = UT_In[k][j];
    while (pivot === 0) {
      k++;
      if (k > rows - 1) return UT_In;
      pivot = UT_In[k][j];
    }
    if (i !== k) {
      interchangeRows(UT_In, i, k);
    }

    if (k > rows - 1)
      UT_In[i] = UT_In[i].map(x => x / pivot);

    for (let u = i + 1; u < rows; u++) {
      let underPivot = UT_In[u][j];
      if (underPivot === 0) continue;

      if (k <= rows - 1) {
        underPivot /= pivot;
      }
      
      UT_In[u] = UT_In[i].map((x, z) => (UT_In[u][z] - (x * underPivot)));
    }

    j++;
    if (j === rows - 1) break;
  }
  return UT_In;
}

function inverseUT_In(UT_In, rows) {
  let j = rows - 1;
  for (let i = rows - 1; i >= 0; i--) {
    let k = i;
    let pivot = UT_In[k][j];
    while (pivot === 0) {
      k--;
      if (k < 0) return UT_In;
      pivot = UT_In[k][j];
    }
    if (i !== k) {
      interchangeRows(UT_In, i, k);
    }

    if (k <= (rows - 1)){
      UT_In[i] = UT_In[i].map(x => x / pivot);
      pivot = 1;
    }

    for (let u = i - 1; u >= 0; u--) {
      let upperPivot = UT_In[u][j];
      if (upperPivot === 0) continue;

      if (k <= rows - 1) {
        upperPivot /= pivot;
      }

      UT_In[u] = UT_In[i].map((x, z) => (UT_In[u][z] - (x * upperPivot)));
    }

    j--;
    if (j === 0) break;
  }
  return UT_In;
}