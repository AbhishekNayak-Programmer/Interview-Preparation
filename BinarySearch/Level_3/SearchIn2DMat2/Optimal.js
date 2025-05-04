const searchIn2DMatrix2 = (mat, target) => {
  let rowLen = mat.length,
    colLen = mat[0].length;
  let rowInd = 0,
    colInd = colLen - 1;

  while (rowInd < rowLen && colInd >= 0) {
    let currentNum = mat[rowInd][colInd];
    if (currentNum === target) return true;
    else if (currentNum < target) {
      rowInd++;
    } else colInd--;
  }

  return false;
};

console.log(
  searchIn2DMatrix2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
