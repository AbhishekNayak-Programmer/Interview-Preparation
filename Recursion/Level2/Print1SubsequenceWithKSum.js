const print1SubsequenceWithKSum = (arr, k) => {
  const backTrack = (index, current, sum) => {
    if (index === arr.length) {
      if (sum === k) {
        console.log([...current]);
        return true;
      }
      return false;
    }

    // Pick current Element in array
    current.push(arr[index]);
    if (backTrack(index + 1, current, sum + arr[index])) return true;

    // Not pick current Element in array
    current.pop();
    if (backTrack(index + 1, current, sum)) return true;

    return false;
  };

  backTrack(0, [], 0);
};

print1SubsequenceWithKSum([1, 2, 3], 3);
