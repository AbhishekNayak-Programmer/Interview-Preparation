const searchInRotatedSortedArr = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    //Check for Left Sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    }
    //Check for Right Sorted
    else if (arr[mid] <= arr[high]) {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else high = low - 1;
    }
  }

  return -1;
};

console.log(searchInRotatedSortedArr([3, 4, 5, 1, 2], 4));
