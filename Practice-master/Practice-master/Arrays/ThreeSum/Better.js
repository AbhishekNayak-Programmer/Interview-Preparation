// Hashing
const ThreeSum = (arr, target) => {
  let len = arr.length,
    ans = [];

  for (let i = 0; i < len; i++) {
    let set = new Set();
    for (let j = i + 1; j < len; j++) {
      let thirdNum = target - (arr[i] + arr[j]);
      if (set.has(thirdNum)) {
        let nums = [arr[i], arr[j], thirdNum].sort((a, b) => a - b);
        ans.push(nums);
      }
      set.add(arr[j]);
    }
  }

  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(ThreeSum([-1, 0, 1, 2, -1, -4], 0));
