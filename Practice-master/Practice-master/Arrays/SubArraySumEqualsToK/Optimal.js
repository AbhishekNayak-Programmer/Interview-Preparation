// Using PrefixSum and Hashing
const countSubArraySumEqualToK = (arr, k) => {
  let prefixSum = 0,
    count = 0,
    map = new Map();
  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    prefixSum = prefixSum + arr[i];
    let rem = prefixSum - k;
    
    if (map.has(rem)) {
      count += map.get(rem);
    }

    if (map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }

  return count;
};

console.log(countSubArraySumEqualToK([1, 2, 3, 4, 1, 2, 4, 7], 7));
