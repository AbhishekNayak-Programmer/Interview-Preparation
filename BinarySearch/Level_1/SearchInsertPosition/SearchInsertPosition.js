//EveryTime whenever we will insert a element inside the sorted array we have to find the lowerbound
const searchInsertPosition = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(searchInsertPosition([1, 2, 3, 3, 3, 4, 5, 6], 3));
