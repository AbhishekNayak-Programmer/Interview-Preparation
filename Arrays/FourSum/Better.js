// Hashing
const fourSum = (arr, target) => {
  let len = arr.length,
    ans = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let set = new Set();
      for (let k = j + 1; k < len; k++) {
        let fouthNum = target - (arr[i] + arr[j] + arr[k]);
        if (set.has(fouthNum)) {
          let nums = [arr[i], arr[j], arr[k], fouthNum].sort((a, b) => a - b);
          ans.push(nums);
        }
        set.add(arr[k]);
      }
    }
  }

  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
