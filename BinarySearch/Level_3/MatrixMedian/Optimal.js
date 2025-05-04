const upperBound = (arr, x, n) => {
  let low = 0,
    high = n - 1,
    ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};

const countSmallEqualsTo = (matrix, rowLen, colLen, targetNum) => {
  let cnt = 0;
  for (let i = 0; i < rowLen; i++) {
    cnt += upperBound(matrix[i], targetNum, colLen);
  }
  return cnt;
};

const matrixMedian = (mat) => {
  let low = Number.MAX_SAFE_INTEGER,
    high = Number.MIN_SAFE_INTEGER;

  let rowLen = mat.length,
    colLen = mat[0].length;

  for (let i = 0; i < rowLen; i++) {
    low = Math.min(low, mat[i][0]);
    high = Math.max(high, mat[i][colLen - 1]);
  }

  let required = Math.floor((rowLen * colLen) / 2);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let smallEqualsCount = countSmallEqualsTo(mat, rowLen, colLen, mid);
    if (smallEqualsCount <= required) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return low;
};

console.log(
  matrixMedian([
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9],
  ])
); // Output : 5
