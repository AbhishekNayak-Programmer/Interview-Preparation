// Works for +ve, and 0 based array but no negative
const longestSubarraySumEqualToK = (arr, k) => {
  let sum = arr[0],
    left = 0,
    right = 0,
    maxLen = 0;

  while (right < arr.length) {
    while (left <= right && sum > k) {
      sum = sum - arr[left];
      left++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
    sum += arr[right];
  }

  return maxLen;
};

console.log(longestSubarraySumEqualToK([2, 3, 5, 1, 9], 10));
