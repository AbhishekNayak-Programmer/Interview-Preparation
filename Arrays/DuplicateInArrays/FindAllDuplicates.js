// Optimal Approach
const findDuplicates = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1; // To get the accurate index even when the number is negative and then -1 as array is 0 based
    if (nums[index] < 0) {
      ans.push(index + 1);
    } else nums[index] = -nums[index];
  }
  return ans;
};

console.log(findDuplicates([1, 2, 3, 1, 2]));
