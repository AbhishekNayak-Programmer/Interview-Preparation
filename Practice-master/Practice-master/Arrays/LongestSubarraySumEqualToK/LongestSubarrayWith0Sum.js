// Optimal Approach - Only works for 0 sum
const longestSubArraySumWith0Sum = (arr) => {
  let len = arr.length,
    map = new Map();
  let sum = 0,
    longestLen = 0;

  for (let i = 0; i < len; i++) {
    sum += arr[i];
    if (sum === 0) {
      longestLen = Math.max(longestLen, i + 1);
    } else {
      if (map.has(sum)) {
        longestLen = Math.max(longestLen, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }

  return longestLen;
};

console.log(longestSubArraySumWith0Sum([-8, 1, 0, 0, 1, 4]));
console.log(longestSubArraySumWith0Sum([9, -3, 3, -1, 6, -5]));
