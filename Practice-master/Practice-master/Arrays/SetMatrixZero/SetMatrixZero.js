const setZeroes = (matrix) => {
  const markedRow = new Array(matrix.length).fill(0); // row array
  const markedCol = new Array(matrix[0].length).fill(0); // col array

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        markedRow[i] = 1;
        markedCol[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (markedRow[i] || markedCol[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
