const printAllSubsequences = (arr) => {
  let ans = [];

  const backTrack = (index, current) => {
    if (index === arr.length) return ans.push([...current]);

    // Pick current Element in array
    current.push(arr[index]);
    backTrack(index + 1, current);

    // Not pick current Element in array
    current.pop();
    backTrack(index + 1, current);
  };

  backTrack(0, []);

  return ans;
};

console.log(printAllSubsequences([1, 2, 3]));
