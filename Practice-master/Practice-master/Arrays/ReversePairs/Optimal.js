const merge = (arr, low, mid, high) => {
  let temp = [],
    left = low,
    right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) temp.push(arr[left++]);
    else temp.push(arr[right++]);
  }

  while (left <= mid) temp.push(arr[left++]);
  while (right <= high) temp.push(arr[right++]);

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
};

// This function helps to add Reverse pair count
const countPairs = (arr, low, mid, high) => {
  let right = mid + 1,
    cnt = 0;
  // We will run the left side array and compare with the right half based on the condition given in question
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1); // After once we got that right position where condition does not works we just update the count
  }
  return cnt;
};

const mergeSort = (arr, low, high) => {
  let count = 0;
  if (low >= high) return count;

  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);

  return count;
};

const reversePairs = (nums) => {
  return mergeSort(nums, 0, nums.length - 1);
};

console.log(reversePairs([1, 3, 2, 3, 1]));
