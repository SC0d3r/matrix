const add = require('./src/add');
const sub = require('./src/sub');
const div = require('./src/div');
const det = require('./src/det');
const identity = require('./src/identity');
const mul = require('./src/mul');
const random = require('./src/random');
const scale = require('./src/scale');
const transpose = require('./src/transpose');
const { row, rows, column, columns } = require('./src/utils');
const strigify = require('./src/stringify');

module.exports = {
  add, sub, div,
  det, identity, mul,
  random, scale, transpose, strigify,
  row, rows, column, columns
}