const subsets = function (nums) {
  let ans = [];

  const getSubset = (index, current) => {
    if (index === nums.length) return ans.push([...current]);

    // Pick Current Element
    current.push(nums[index]);
    getSubset(index + 1, current);

    // Not Pick Current Element
    current.pop();
    getSubset(index + 1, current);
  };

  getSubset(0, []);

  return ans;
};

console.log(subsets([1, 2, 3]));
