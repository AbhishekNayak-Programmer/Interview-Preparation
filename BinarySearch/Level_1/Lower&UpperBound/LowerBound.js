const LowerBoundBinarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(LowerBoundBinarySearch([1, 2, 3, 3, 3, 4, 5, 6], 3));
