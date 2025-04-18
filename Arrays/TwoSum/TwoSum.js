const TwoSum = (arr, target) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let required = target - arr[i];
    if (map.has(required)) {
      return [i, map.get(required)];
    }
    map.set(arr[i], i);
  }

  return [-1, -1];
};

console.log(TwoSum([12, 7, 2, 15], 9));
