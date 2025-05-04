const countSubArrays = (arr, limit) => {
  let subArrayCount = 1,
    last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + last > limit) {
      subArrayCount++;
      last = arr[i];
    } else last += arr[i];
  }
  return subArrayCount;
};

const splitArray = function (nums, k) {
  if (nums.length < k) return -1;
  let low = Math.max(...nums),
    high = nums.reduce((acc, el) => (acc += el), 0),
    ans = low;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = countSubArrays(nums, mid);
    if (count === k) {
      ans = mid;
      high = mid - 1;
    } else if (count < k) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
