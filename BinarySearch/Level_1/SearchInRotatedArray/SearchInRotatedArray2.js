const searchInRotatedSortedArr = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    //Edge case when low, high and mid all are same
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;
      continue;
    }

    //Check for Left sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    }
    //Check for Right sorted
    else if (arr[mid] <= arr[high]) {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }

  return -1;
};

//Here in the case of duplicates you have to handle a edge case when high, low and mid is same like in the below given array you can see 3 is there so to solve the duplicate problem you have to inc low, dec high and continue to check for next iteration
console.log(searchInRotatedSortedArr([3, 3, 3, 3, 3, 1, 3], 1));
