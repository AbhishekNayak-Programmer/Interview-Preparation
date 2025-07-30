const combinationSum = (index, current, candidates, target, ans) => {
  if (target === 0) return ans.push([...current]); // When Target is 0 that means we got a combination we can push that current to ans

  // Running loop from current index to end of the array
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue; // When prev and next num are same then continue as duplicacy not allowed
    if (candidates[i] > target) return; // When current candidate is greater than target then we should not go forward as that will never be our correct subsequence as array is sorted

    current.push(candidates[i]); // Push current candidate to the current array
    combinationSum(i + 1, current, candidates, target - candidates[i], ans); // Check for the combinationsum for next index
    current.pop(); // removing the last pushed value
  }
};

const combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b); // Sorting the array for no duplicate values
  combinationSum(0, [], candidates, target, ans); // Initial call
  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
