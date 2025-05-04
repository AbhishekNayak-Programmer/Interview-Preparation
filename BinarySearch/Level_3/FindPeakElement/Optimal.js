const getMaxRowInd = (mat, colNum, rowLen) => {
  let maxInd = -1,
    maxNum = 0;
  for (let i = 0; i < rowLen; i++) {
    if (mat[i][colNum] > maxNum) {
      maxNum = mat[i][colNum];
      maxInd = i;
    }
  }
  return maxInd;
};

const findPeakIn2DMatrix = (mat) => {
  let rowLen = mat.length,
    colLen = mat[0].length;

  let low = 0,
    high = colLen - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let maxRowInd = getMaxRowInd(mat, mid, rowLen);
    let leftEl = mid - 1 >= 0 ? mat[maxRowInd][mid - 1] : -1;
    let rightEl = mid + 1 < colLen ? mat[maxRowInd][mid + 1] : -1;
    let num = mat[maxRowInd][mid];
    if (num > leftEl && num > rightEl) return num;
    else if (num < leftEl) high = mid - 1;
    else low = mid + 1;
  }

  return [-1, -1];
};

console.log(
  findPeakIn2DMatrix([
    [1, 4],
    [3, 2],
  ])
);
