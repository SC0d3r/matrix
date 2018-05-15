const common = `

  "These matrices are not valid for this action"
  
  [Help] you can use invalidityReasoner to find out the problem

  --> example : 
  
    const invalidityReasoner = require('matrix-core/invalidityReasoner);

    console.log(invalidityReasoner(matrix));
    
`;

const multiplicationDimensionErrorMessage = `

  "Matrices dont have valid dim for multiplication"

  Means : 
   - the first matrix column is not the same as second matrix row

   - Formula is : 

     -- if Matrix1 is a N x M matrix 
     -- if Matrix2 is a V x Z matrix 
     -- for multiplication 'M' should be equal to 'V'
     -- and the result Matrix will be N x Z matrix

   --> Example : 

     const matrix1 = [[1,2,3],[4,5,6]]; //  (2 x 3) matrix
     const matrix2 = [[4],[5],[6]]; // (3 x 1) matrix 

     const resultMatrix = mul(matrix1 , matrix2) ; // (2 x 1) matrix
`;

module.exports = {
  common,
  multiplicationDimensionErrorMessage
}