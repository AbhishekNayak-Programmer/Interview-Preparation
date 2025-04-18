const MinimumSubarraySumGreaterEqualToK = (arr, k) => {
  let len = arr.length,
    minLen = Infinity,
    right = 0,
    left = 0,
    sum = 0;

  while (right < len) {
    sum += arr[right];
    while (left <= right && sum >= k) {
      minLen = Math.min(minLen, right - left + 1);
      sum = sum - arr[left];
      left++;
    }
    right++;
  }

  return minLen;
};

console.log(MinimumSubarraySumGreaterEqualToK([2, 3, 5, 1, 9, 10], 10));
