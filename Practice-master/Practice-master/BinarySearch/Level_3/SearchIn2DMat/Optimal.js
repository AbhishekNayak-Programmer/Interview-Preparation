const searchIn2DMatrix = (mat, target) => {
  let low = 0,
    rowLen = mat.length,
    colLen = mat[0].length;
  high = rowLen * colLen - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let rowInd = Math.floor(mid / colLen);
    let colInd = mid % colLen;
    let num = mat[rowInd][colInd];
    if (num === target) return true;
    else if (num < target) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return false;
};

console.log(
  searchIn2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    23
  )
);
