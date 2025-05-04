const fourSum = (arr, target) => {
  let ans = [],
    len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        for (let l = k + 1; k < len; k++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === target) {
            let nums = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
            ans.push(nums);
          }
        }
      }
    }
  }

  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
