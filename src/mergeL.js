const isValid = require('./validityCheck/isValid');
const messages = require('./validityCheck/messages.json');
const { isArray, columns, row,rows } = require('./utils');
const mergeR= require('./mergeR');

function mergeL(lM, rM) {
  return mergeR(rM , lM);
}

module.exports = mergeL;
