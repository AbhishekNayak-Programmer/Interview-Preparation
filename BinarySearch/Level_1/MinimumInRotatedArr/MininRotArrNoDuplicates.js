const searchInRotatedSortedArr = (arr) => {
  let low = 0,
    high = arr.length - 1,
    min = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //When Array is already sorted compute min and break out no more binary search is required
    if (arr[low] <= arr[high]) {
      min = Math.min(min, arr[low]);
      break;
    }

    //Check for Left Sorted
    if (arr[low] <= arr[mid]) {
      min = Math.min(min, arr[low]);
      low = mid + 1;
    }
    //Check for Right Sorted
    else if (arr[mid] <= arr[high]) {
      min = Math.min(min, arr[mid]);
      high = mid - 1;
    }
  }

  return min;
};

console.log(searchInRotatedSortedArr([3, 4, 5, 1, 2]));
