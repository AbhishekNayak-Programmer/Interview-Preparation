const TwoSum = (arr, target) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let required = target - arr[i];
    if (set.has(required)) {
      return [arr[i], required];
    }
    set.add(arr[i]);
  }

  return [-1, -1];
};

console.log(TwoSum([12, 7, 2, 15], 9));
