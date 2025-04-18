// Works for +ve, -ve and 0 based array
// Hashmap solution
const longestSubarraySumEqualToK = (arr, k) => {
  let sum = 0,
    map = new Map(),
    maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let rem = sum - k;
    if (map.has(rem)) {
      let longest = i - map.get(rem);
      maxLen = Math.max(maxLen, longest);
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
};


console.log(longestSubarraySumEqualToK([2,3,5,1,9], 10));