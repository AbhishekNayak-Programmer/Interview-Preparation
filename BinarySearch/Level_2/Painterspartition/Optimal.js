const countPainter = (arr, limit) => {
  let painterCount = 1,
    last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (last + arr[i] > limit) {
      painterCount++;
      last = arr[i];
    } else last += arr[i];
  }
  return painterCount;
};

const minTime = (arr, k) => {
  let low = Math.max(...arr),
    high = arr.reduce((acc, el) => (acc += el), 0);
  let ans = low;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let count = this.countPainter(arr, mid);
    if (count <= k) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(minTime([5, 10, 30, 20, 15], 3)); // Array of Paints and Painter
