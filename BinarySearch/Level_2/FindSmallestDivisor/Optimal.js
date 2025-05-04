const getHours = (divisor, arr) => {
  let hoursCount = 0;
  for (let i = 0; i < arr.length; i++) {
    hoursCount += Math.ceil(arr[i] / divisor);
  }
  return hoursCount;
};

const smallestDivisor = (arr, h) => {
  let low = 0,
    high = Math.max(...arr),
    ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let hours = getHours(mid, arr);
    if (hours <= h) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(smallestDivisor([3, 6, 7, 11], 8)); // 8 is hours and array is arr
