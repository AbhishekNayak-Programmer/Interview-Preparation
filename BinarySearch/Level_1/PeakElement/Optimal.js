const peakElement = (arr) => {
  let len = arr.length;
  if (len === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[len - 1] > arr[len - 2]) return len - 1;

  let low = 1, high = len - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;

    // Increasing Line
    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return -1;
};

console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
