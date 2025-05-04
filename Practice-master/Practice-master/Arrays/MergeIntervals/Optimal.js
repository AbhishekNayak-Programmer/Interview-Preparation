const mergeOverlappingIntervals = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    let ansTopInterval = ans[ans.length - 1];
    let currentInterval = arr[i];

    if (ansTopInterval[1] > currentInterval[0]) {
      ansTopInterval[1] = Math.max(ansTopInterval[1], currentInterval[1]);
    } else {
      ans.push(currentInterval);
    }
  }
  return ans;
};

console.log(
  mergeOverlappingIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ])
);
