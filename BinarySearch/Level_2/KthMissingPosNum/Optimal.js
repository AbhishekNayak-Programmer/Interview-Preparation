const kthMissingPosNum = (arr, missingPos) => {
  let low = arr[0],
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missingNums = arr[mid] - (mid + 1);
    if (missingNums < missingPos) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return low + missingPos;
};

console.log(kthMissingPosNum([2, 3, 4, 7, 11], 5));
