const isCowsPlacable = (arr, distance, cows) => {
  let cowsCount = 1,
    last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= distance) {
      cowsCount++;
      last = arr[i];
    }
  }

  if (cowsCount >= cows) return true;
  return false;
};

const minDistanceOfCows = (stands, cows) => {
  let len = stands.length;
  if (len < cows) return -1;

  stands.sort((a, b) => a - b);
  let low = 1,
    high = stands[len - 1],
    ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isCowsPlacable(stands, mid, cows)) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }

  return ans;
};

console.log(minDistanceOfCows([1, 2, 4, 8, 9], 3));
