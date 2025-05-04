const getStudentsCount = (arr, limit) => {
  let student = 1,
    last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (last + arr[i] > limit) {
      student++;
      last = arr[i];
    } else last += arr[i];
  }
  return student;
};

const findPages = (arr, k) => {
  let len = arr.length;
  if (len < k) return -1;

  let low = Math.max(...arr),
    high = arr.reduce((acc, el) => (acc += el), 0),
    ans = low;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let allocationCount = getStudentsCount(arr, mid);

    if (allocationCount <= k) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log([12, 34, 67, 90], 2); // Arr of Books and Number of Students
