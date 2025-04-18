const reversePairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > 2 * nums[j]) count++;
    }
  }

  return count;
};

console.log(reversePairs([1, 3, 2, 3, 1]));
