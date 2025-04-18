const TwoSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [arr[left], arr[right]];
    }
  }

  return [-1, -1];
};

console.log(TwoSum([12, 7, 2, 15], 9));
