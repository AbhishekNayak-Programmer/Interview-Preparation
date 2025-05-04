const transpose = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let result = Array.from({ length: colLen }, () => Array(rowLen).fill(0));

  for (let row = 0; row < colLen; row++) {
    for (let col = 0; col < rowLen; col++) {
      result[row][col] = matrix[col][row];
    }
  }

  return result;
};

console.log(
  transpose([
    [1, 2],
    [4, 5],
    [7, 8],
  ])
);
