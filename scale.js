const isValid = require('./isValid');
const messages = require('./messages.json');
const { isArray } = require('./utils');

const _scale = require('./_scale');

module.exports = function scale(m, mag = 1) {
  if (!isValid(m))
    throw new Error(messages.default);
  if (!isNumeric(mag))
    throw new Error('scale(matrix , --> Here should be a number <--)');

  return _scale(m , mag);
}

function isNumeric(maybeNumber) {
  return !isNaN(maybeNumber) && typeof (maybeNumber) === 'number';
}