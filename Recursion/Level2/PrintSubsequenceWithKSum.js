const printSubsequenceWithKSum = (arr, k) => {
  let ans = [];

  const backTrack = (index, current, sum) => {
    if (index === arr.length) {
      if (sum === k) ans.push([...current]);
      return;
    }

    // Pick current Element in array
    current.push(arr[index]);
    backTrack(index + 1, current, sum + arr[index]);

    // Not pick current Element in array
    current.pop();
    backTrack(index + 1, current, sum);
  };

  backTrack(0, [], 0);

  return ans;
};

console.log(printSubsequenceWithKSum([1, 2, 3], 3));
