const Leaders = (nums) => {
  let max = -Infinity,
    ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= max) {
      max = nums[i];
      ans.push(nums[i]);
    }
  }

  return ans.reverse();
};

console.log(Leaders([16, 17, 4, 3, 5, 2]));
