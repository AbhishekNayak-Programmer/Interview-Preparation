const countArrayRotation = (arr) => {
  let low = 0,
    high = arr.length - 1,
    index,
    min = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //Handling the case when array is sorted
    if (arr[low] <= arr[high]) {
      if (arr[low] < min) {
        min = arr[low];
        index = low;
      }
      break;
    }

    //Check for Left Sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] < min) {
        min = arr[low];
        index = low;
      }
      low = mid + 1;
    }
    //Check for Right Sorted
    else if (arr[mid] <= arr[high]) {
      if (arr[mid] < min) {
        min = arr[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }

  return index;
};

// If you are able to find the min then you can easily return that min index that many times the array is rotated
console.log(countArrayRotation([3, 4, 5, 1, 2]));
