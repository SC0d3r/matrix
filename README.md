## `Matrix`  Library<sub><small> {small and `Efficient`}</small></sub>

![CircleCI](https://circleci.com/gh/SC0d3r/matrix.svg?style=shield&circle-token=b527ec4b6d9916f5144a9b9bf74ada6783d0474a) ![Build](https://img.shields.io/circleci/token/b527ec4b6d9916f5144a9b9bf74ada6783d0474a/project/github/SC0d3r/matrix/master.svg) [![Coverage Status](https://coveralls.io/repos/github/SC0d3r/matrix/badge.svg?branch=master)](https://coveralls.io/github/SC0d3r/matrix?branch=master)

Matrix-core is a small library for handling matrices , At its core it is made only from functions there is no object involved , So this gives more speed and less unnessary complexity and most importantly by combining it with a bundler like Webpack , ... which does Tree Shaking you can get only the functions you need __not the entire jungle!__

## Installation 
### npm
```javascript
> npm i matrix-core
```

### In browser
Then add a `<script>` to your index.html:

```html
<script src="/node_modules/matrix-core/dist/matrix-core.min.js"></script>

<!-- now you have access to Matrix obj -->

<!-- Example -->
<script>

 Matrix.add([1,2],[3,4]); // [4,6]
 
</script>
```

### In Node

```javascript
  const matrix = require('matrix-core');

  // or 

  const {add , mul , identity} = require('matrix-core');
```

#### If you want tree shaking:

```javascript
const add = require('matrix-core/add');
const identity = require('matrix-core/identity');
const transpose = require('matrix-core/transpose');
```

#### If you want to get all the `speed` possible

every method in this library has a cousin with the same name following an `Underscore`. Functions with `Underscores` do not have any `Error Handling Codes` which makes them much much `Faster` than their counterparts , But make sure you pass valid matrices to them or you can use invalidityReasoner to check a matrix if it is valid or not and then pass that matrix to the function with underscore.

##### For example :

```javascript
const add = require('matrix-core/add'); // with Error handling

// Or

const add = require('matrix-core/_add'); // this is way faster but without Error handling
```




### A Short Explanation

every `inner array`  = A `row` in matrix

every `,`            = A `column` in matrix

For example :
```javascript
let matrix = [[1,2,3]]; // a matrix with (1 row and 3 columns)

matrix = [1,2,3]; // this is the same as above (1 row and 3 columns)

matrix = [[1,2] , [3,4]]; // (2 rows and 2 columns)


matrix = [[1,2] , [3]] ; // Error : this matrix is not valid 
// Reason : (first row has 2 columns but second row has only 1 column)
```

## Error Handling

you can use `invalidityReasoner` to ensure if a matrix is valid or not it returns a text message containing the reasons for invalidity or an empty string if it is valid. 

or  you can use `isValid` function to get a boolean `true` or `false` 

Example:

```javascript
const invalidityReasoner = require('matrix-core/invalidityReasoner');

const isValid = require('matrix-core/isValid');

const matrix = [1,[2]];

console.log(invalidityReasoner(matrix)); // logs : rows in matrix do not match

// or 


console.log(isValid(matrix));// logs : false
```

## Methods

[ [**add**](#add) ]  [ [**sub**](#sub) ] [ [**scale**](#scale) ]
[ [**mul**](#mul) ]
[ [**transpose**](#transpose) ]
[ [**det**](#det) ]
[ [**div**](#div) ]
[ [**identity**](#identity) ]
[ [**random**](#random) ]
[ [**stringify**](#stringify) ]
[ [**clone**](#clone) ]
[ [**LU**](#lu) ]
[ [**inv**](#inv) ]
[ [**mergeR**](#mergeR) ]
[ [**mergeL**](#mergeL) ]
[ [**ones**](#ones) ]
[ [**zeros**](#zeros) ]
[ [**columns**](#columns) ]
[ [**column**](#column) ]
[ [**rows**](#rows) ]
[ [**row**](#row) ]
 
<br>

>  __Note :__ `inv`,`det`,`LU` functions have [<small>Not `pure`</small>] tag this means that these function change their parameter(= `matrix`)  for getting the most speed, These functions have a pure version which you can use instead : `pInv`,`pDet`,`PLU`

<br>

### Add

```javascript
const {add} = require('matrix-core');
// Or
const add = require('matrix-core/add');
// Or for fast speed
const add = require('matrix-core/_add');

const m1 = [[1,2]];
const m2 = [[3,4]];

const result = add(m1 , m2); // [[4 , 6]]
```

### Sub

```javascript
const {sub} = require('matrix-core');

const m1 = [1 , 2];
const m2 = [3 , 4];

const result = sub(m1 , m2); // [-2,-2]
```

### Scale

```javascript
const {scale} = require('matrix-core');

const matrix = [[1,2] , [3,4]];

const result = scale(m , 2); // [[2,4] ,[6,8]]
```

### Mul

```javascript
const {mul} = require('matrix-core');

const m1 = [[1, 2], [3, 4]];
const m2 = [[5, 6], [7, 8]];
const result = mul(m1, m2); // [[19, 22], [43, 50]]
```

### Transpose

```javascript
const {transpose} = require('matrix-core');

const matrix = [[1, 2], [3, 4]];

const result = transpose(m); // [[1 , 3], [2 , 4]]
```

### Det
[<small>Not `pure`</small>]
```javascript
const {det} = require('matrix-core');

const matrix = [[-1, 1, 1], [1, -2, 2], [1, -3, 3]];
const result = det(m); // result = -2
```

### Div

```javascript
const {div} = require('matrix-core');

const m1 = [[1 , 2]];
const m2 = [[2 ,2]];
const result = div(m1 , m2); // [[0.5 , 1]]
```

### Identity

```javascript
const {identity} = require('matrix-core');

const result = identity(3); 

/* 
result = 
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]

*/
```

### Random

```javascript
const {random} = require('matrix-core');

// returns a matrix 1 x 2 
// elements are between 1 and 0
const result = random(1,2);// returns [[0 <= x1 < 1,0 <= x2 < 1]]

const result = random(2);// returns 2 x 2 matrix

// you can provide a function to generate random numbers
const rand = (i , j) => 1
const result = random(1,2,rand);// returns [[1,1]]

```

### Stringify

```javascript
const {stringify} = require('matrix-core');

const matrix = [[1, 2],[3,4]];

const strRepr = stringify(m1);
// you can give the stringify function a precision as the second arg
// default is 2

console.log(strRepr);
/*
 __        __
| 1.00  2.00 |
| 3.00  4.00 |
|__........__|

*/

```

### Clone

```javascript
const {clone} = require('matrix-core');

const matrix = [[1, 2],[3,4]];

const result = clone(m); // [[1, 2], [3, 4]]

```

### LU
[<small>Not `pure`</small>]

```javascript
const {LU} = require('matrix-core');

const matrix = [
  [3, 1],
  [4, 2]
];

[lt, ut] = LU(m);

/*
 lt (or lower triangular) = [
   [1, 0],
   [1.3333333333333333, 1]
 ];

 ut (or upper triangular) = [
   [3, 1],
   [0, 0.6666666666666667]
 ];

*/
```

### Inv 
[<small>Not `pure`</small>]

```javascript
const {inv} = require('matrix-core');

// it throws if the given matrix does not have an inverse

const matrix = [[1, 4], [1, 4]]; // determinant = 0 --> so does not have an inverse

const result = inv(matrix); // result = 0; means there is no inverse

const matrix1 = [[1, 2], [3, 4]];
let inv_m = inv(matrix1); // [[-2, 1], [1.5, -0.5]];

```

### MergeR 

```javascript
const {mergeR} = require('matrix-core');

const m1 = [[1, 2], [3, 4]];
const m2 = [[5, 5], [5, 5]];

const result = mergeR(m1, m2); 
/*
[
  [1, 2, 5, 5],
  [3, 4, 5, 5]
]
*/

```

### MergeL

```javascript
const {mergeL} = require('matrix-core');

const m1 = [[1, 2], [3, 4]];
const m2 = [[5, 5], [5, 5]];

const result = mergeL(m1, m2); 
/*
[
  [5, 5, 1, 2],
  [5, 5, 3, 4]
]
*/

```

### Ones

```javascript
const {ones} = require('matrix-core');

const result = ones(3);
/*
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

*/

```

### Zeros

```javascript
const {zeros} = require('matrix-core');

const result = zeros(3);
/*
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

*/

```

### Columns
returns the `number` of columns
```javascript
const {columns} = require('matrix-core');

// Or for tree shaking use bellow
// const {columns} = require('matrix-core/utils');


const matrix =[[1,2],[3,4]]

const result = columns(matrix) ; // 2

```

### Column
returns the `column` sepcified
```javascript
const {column} = require('matrix-core');

// Or for tree shaking use bellow
// const {column} = require('matrix-core/utils');


const matrix =[[1,2],[3,4]]

const result = column(matrix , 0) ; // [1,3]

```

### Rows
returns the `number` of rows
```javascript
const {rows} = require('matrix-core');

// Or for tree shaking use bellow
// const {rows} = require('matrix-core/utils');


const matrix =[[1,2],[3,4]]

const result = rows(matrix) ; // 2

```

### Row
returns the `row` sepcified
```javascript
const {row} = require('matrix-core');

// Or for tree shaking use bellow
// const {row} = require('matrix-core/utils');


const matrix =[[1,2],[3,4]]

const result = row(matrix , 0) ; // [1,2]

```

## Feedback
Please send `Bug Reports`, `Comments`, or `Questions` to [SC0d3r](https://github.com/SC0d3r/matrix). Contributions and extensions with new algorithms are welcome.

## License

#### The `MIT` License