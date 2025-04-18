const TwoSum = (arr, target) => {
  let ans = [];
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      ans.push([arr[left], arr[right]]);
      while (left < right && arr[left] === arr[left + 1]) left++;
      while (left < right && arr[right] === arr[right - 1]) right--;
      left++;
      right--;
    }
  }

  return ans;
};

console.log(TwoSum([12, 7, 2, 15, -6], 9));
