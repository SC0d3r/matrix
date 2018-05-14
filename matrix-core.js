const add = require('./add');
const _add = require('./_add');

const sub = require('./sub');
const _sub = require('./_sub');

const div = require('./div');
const _div = require('./_div');

const det = require('./det');
const _det = require('./_det');

const pDet = require('./pDet');
const _pDet = require('./_pDet');

const identity = require('./identity');
const _identity = require('./_identity');

const mul = require('./mul');
const _mul = require('./_mul');

const random = require('./random');
const _random = require('./_random');

const scale = require('./scale');
const _scale = require('./_scale');

const transpose = require('./transpose');
const _transpose = require('./_transpose');

const stringify = require('./stringify');
const _stringify = require('./_stringify');

const clone = require('./clone');
const _clone = require('./_clone');

const LU = require('./LU');
const _LU = require('./_LU');

const PLU = require('./PLU');
const _PLU = require('./_PLU');

const mergeR = require('./mergeR');
const _mergeR = require('./_mergeR');

const mergeL = require('./mergeL');
const _mergeL = require('./_mergeL');

const inv = require('./inv');
const _inv = require('./_inv');

const pInv = require('./pInv');
const _pInv = require('./_pInv');

const ones = require('./ones');
const _ones = require('./_ones');

const { row, rows, column, columns } = require('./utils');

const invalidityReasoner = require('./invalidityReasoner');
const isValid = require('./isValid');
const additionValidity = require('./additionValidity');

const Matrix = {
  add, sub, div,
  det, pDet, identity, mul,
  random, scale, transpose,
  stringify, clone, LU, PLU,
  mergeR, mergeL,
  inv, pInv,
  ones,_ones,
  
  _add, _sub, _div,
  _det, _pDet, _identity, _mul,
  _random, _scale, _transpose,
  _stringify, _clone, _LU, _PLU,
  _mergeR, _mergeL,
  _inv, _pInv,
  
  /* Utils */row, rows, column, columns,
  /* Validitions */invalidityReasoner, isValid, additionValidity
}

module.exports = Matrix;