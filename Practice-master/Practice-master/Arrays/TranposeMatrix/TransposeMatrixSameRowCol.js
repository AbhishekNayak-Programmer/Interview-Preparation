const transpose = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let result = Array.from({ length: rowLen }, () => Array(colLen).fill(0));

  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      result[row][col] = matrix[col][row];
    }
  }

  return result
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
