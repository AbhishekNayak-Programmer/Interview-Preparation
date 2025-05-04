const BinarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    // let mid = Math.floor(low + ((high - low)/2)); // Optimal Calculation

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      low = mid + 1;
    } else high = mid - 1; // Only if arr[mid] > target
  }

  return -1; // If element not found return -1
};

console.log(BinarySearch([1, 2, 3, 4, 5, 6], 3));
