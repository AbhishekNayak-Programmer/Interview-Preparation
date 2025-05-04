const ThreeSum = (arr, target) => {
  let ans = [],
    len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === target) {
          let nums = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          ans.push(nums);
        }
      }
    }
  }

  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(ThreeSum([-1, 0, 1, 2, -1, -4], 0));

