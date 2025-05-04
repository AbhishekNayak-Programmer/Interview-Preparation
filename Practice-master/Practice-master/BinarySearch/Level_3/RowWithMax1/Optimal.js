const lowerBound = (arr, target) => {
  let ans = arr.length,
    low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

const rowWithMaxOnes = (mat) => {
  let maxRow = -1,
    rowLen = mat.length,
    colLen = mat[0].length,
    maxCount = 0;

  for (let i = 0; i < rowLen; i++) {
    let count = colLen - lowerBound(mat[i], 1);
    if (count > maxCount) {
      maxRow = i;
      maxCount = count;
    }
  }

  return maxRow;
};

console.log(
  rowWithMaxOnes([
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
  ])
);
