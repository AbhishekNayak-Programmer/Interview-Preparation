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

//Approach
// 1. get the starting index of the number
// 2. get the ending index of the number
// 3. Then ending - starting + 1 as array is 0 based
const countOccurences = (arr, target) => {
  let len = arr.length;
  let lb = LowerBoundBinarySearch(arr, target);
  if (lb === len || arr[lb] !== target) return 0;
  let ub = UpperBoundBinarySearch(arr, target) - 1;
  return ub - lb + 1;
};

let arr = [1, 2, 3, 3, 3, 10];
let target = 3;
console.log(countOccurences(arr, target));
