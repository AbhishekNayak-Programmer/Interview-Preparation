// Given an integer array nums that may contain duplicates, return all possible (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

const subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  const getSubset = (index, current) => {
    ans.push([...current]);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;

      //Pick Case
      current.push(nums[i]);
      getSubset(i + 1, current);

      //Not Pick Case
      current.pop();
    }
  };

  getSubset(0, []);

  return ans;
};

console.log(subsetsWithDup([1, 2, 2]));
