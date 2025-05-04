// Reverse of Lowerbound logic
const findFloor = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      ans = arr[mid];
      low = mid + 1;
    } else high = mid - 1;
  }

  return ans;
};

// Simple Lower Bound Implementation will give you ceil value
const findCeil = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = arr[mid];
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

let arr = [1, 2, 3, 3, 3, 10];
let target = 4;
console.log(`Floor value of ${target} is : `, findFloor(arr, target));
console.log(`Ceil value of ${target} is : `, findCeil(arr, target));
