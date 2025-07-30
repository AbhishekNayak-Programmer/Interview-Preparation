const combinationSum3 = (k, n) => {
  let ans = [],
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const recursiveCombinations = (index, current, sum, size) => {
    if (sum === n && size === current.length) return ans.push([...current]); // When we got our combination then just add it to answer
    if (index === nums.length || current.length > size || sum > n) return; // Base cases to handle exits

    // Pick current element
    current.push(nums[index]);
    recursiveCombinations(index + 1, current, sum + nums[index], size);

    // Not Pick current element
    current.pop();
    recursiveCombinations(index + 1, current, sum, size);
  };

  recursiveCombinations(0, [], 0, k); // Initial calling of function

  return ans;
};

console.log(combinationSum3(3, 7));
