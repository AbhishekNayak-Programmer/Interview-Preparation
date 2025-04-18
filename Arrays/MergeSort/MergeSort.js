const merge = (arr, low, mid, high) => {
  let left = low,
    right = mid + 1,
    ans = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) ans.push(arr[left++]);
    else ans.push(arr[right++]);
  }

  while (left <= mid) ans.push(arr[left++]);
  while (right <= high) ans.push(arr[right++]);

  for (let i = low; i <= high; i++) {
    arr[i] = ans[i - low];
  }
};

const mergeSort = (arr, low, high) => {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
  return arr;
};

let arr = [5, 67, 74, 3465, 6];
console.log(mergeSort(arr, 0, arr.length - 1));
