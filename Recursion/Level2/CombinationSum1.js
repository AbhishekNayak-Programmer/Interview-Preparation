const combinationSum = function (candidates, target) {
  let ans = [];

  const getCandidatesSubset = (index, current, sum) => {
    if (sum === target) return ans.push([...current]);
    if (index === candidates.length || sum > target) return;

    // Pick Element Case
    current.push(candidates[index]);
    getCandidatesSubset(index, current, sum + candidates[index]);

    // Not Pick Element Case
    current.pop();
    getCandidatesSubset(index + 1, current, sum);
  };

  getCandidatesSubset(0, [], 0);

  return ans;
};


console.log(combinationSum([2, 3, 6, 7], 7));