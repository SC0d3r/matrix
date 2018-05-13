const isArray = Array.isArray;
const onlyNumber = x => !isNaN(x) && typeof x === 'number';
const onlyNumbers = arr => arr.every(x => isArray(x) ? onlyNumbers(x) : onlyNumber(x));

module.exports = function invalidityReasoner(matrix) {

  const shouldBeArray = isArray(matrix);
  const shouldContainSomething = shouldBeArray && matrix.length > 0;
  const shouldContainOnlyNumbers = shouldBeArray && onlyNumbers(matrix);
  const shouldBeAtMost2DArray = shouldBeArray && isAtMost2D(matrix);
  const rowsShouldBeSameLength = shouldBeArray && haveSameLengthRows(matrix);

  const messages = [];

  if (!shouldBeArray) messages.push("Matrix should be an array");
  if (!shouldContainOnlyNumbers) messages.push("Should contain only numbers");
  if (!shouldContainSomething) messages.push('Matrix should contain at least one number');
  if (!shouldBeAtMost2DArray) messages.push('matrix should be at most 2D array');
  if (!rowsShouldBeSameLength) messages.push('rows in matrix do not match');

  return messages.join(' AND ');
}

function isAtMost2D(arr, layers = 1) {
  if (layers > 2) return false;
  return arr.every(x => isArray(x) ? isAtMost2D(x, layers + 1) : true);
}

function haveSameLengthRows(arr) {
  const innerArrays = arr.filter(isArray);

  // if there is one column all the rows should have columns too
  if (innerArrays.length > 0 && innerArrays.length !== arr.length)
    return false;

  const arrIntoLength = x => x.length;
  const shouldBeEqual = (num, i, array) => array[0] === num;
  return innerArrays.map(arrIntoLength).every(shouldBeEqual);
}
