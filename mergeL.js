const isValid = require('./isValid');
const messages = require('./messages.json');
const { isArray, columns, row,rows } = require('./utils');
const mergeR= require('./mergeR');

function mergeL(lM, rM) {
  return mergeR(rM , lM);
}

module.exports = mergeL;
