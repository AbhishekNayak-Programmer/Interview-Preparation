const countSubsequenceWithKSum = (arr, k) => {
  const backTrack = (index, current, sum) => {
    if (index === arr.length) {
      if (sum === k) return 1;
      return 0;
    }

    // Pick current Element in array
    current.push(arr[index]);
    let countInclude = backTrack(index + 1, current, sum + arr[index]);

    // Not pick current Element in array
    current.pop();
    let countExclude = backTrack(index + 1, current, sum);

    return countInclude + countExclude;
  };

  return backTrack(0, [], 0);
};

console.log(countSubsequenceWithKSum([1, 2, 3], 3));
