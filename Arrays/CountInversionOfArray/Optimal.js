const merge = (arr, low, mid, high) => {
  let left = low,
    right = mid + 1,
    ans = [],
    count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) ans.push(arr[left++]);
    else {
        ans.push(arr[right++]);
        count += mid - left + 1;
    }
  }

  while (left <= mid) ans.push(arr[left++]);
  while (right <= high) ans.push(arr[right++]);

  for (let i = low; i <= high; i++) {
    arr[i] = ans[i - low];
  }

  return count;
};

const mergeSort = (arr, low, high) => {
  let count = 0;
  if (low >= high) return count;

  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);

  return count;
};

const inversionCount = (arr) => {
  let n = arr.length;
  return mergeSort(arr, 0, n - 1);
};

console.log(inversionCount([4, 3, 2, 1]));
