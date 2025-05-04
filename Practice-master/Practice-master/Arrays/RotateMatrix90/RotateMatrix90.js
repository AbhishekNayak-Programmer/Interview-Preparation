const rotate = function (matrix) {
  //Transpose of a matrix (means columns will be rows and rows will be columns)
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //Reverse each row
  for (let i = 0; i < matrix.length; i++) {
    let start = 0;
    end = matrix[i].length - 1;
    while (start < end) {
      let temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
      start++;
      end--;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
