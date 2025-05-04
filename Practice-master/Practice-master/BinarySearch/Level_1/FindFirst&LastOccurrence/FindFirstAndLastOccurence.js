const LowerBoundBinarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

const UpperBoundBinarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

const findFirstAndLastOccurence = (arr, target) => {
  let len = arr.length;
  let lb = LowerBoundBinarySearch(arr, target);
  if (lb === len || arr[lb] !== target) return [-1, -1];
  return [lb, UpperBoundBinarySearch(arr, target) - 1];
};

// To get the first occurence we can find lowerbound
// To get the last occurence we can find upperBound - 1
let arr = [1, 2, 3, 3, 3, 10];
let target = 3;
console.log(findFirstAndLastOccurence(arr, target));
