const countSubArraySumEqualToK = (arr, k) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) count++;
    }
  }

  return count;
};

console.log(countSubArraySumEqualToK([1, 2, 3, 4, 1, 2, 4, 7], 7));
