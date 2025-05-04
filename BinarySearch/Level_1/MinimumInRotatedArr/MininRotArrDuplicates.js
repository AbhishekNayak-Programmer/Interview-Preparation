const searchInRotatedSortedArr = (arr) => {
  let low = 0,
    high = arr.length - 1,
    min = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //Edge case when low, high and mid all are same
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      min = Math.min(min, arr[low]);
      low++;
      high--;
      continue;
    }

    //Check for Left sorted
    if (arr[low] <= arr[mid]) {
      min = Math.min(min, arr[low]);
      low = mid + 1;
    }
    //Check for Right sorted
    else if (arr[mid] <= arr[high]) {
      min = Math.min(min, arr[mid]);
      high = mid - 1;
    }
  }

  return min;
};

console.log(searchInRotatedSortedArr([3, 3, 3, 3, 3, 1, 3]));
