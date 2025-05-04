const getBouquetsCount = (arr, day, adjacency) => {
  let count = 0,
    bCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) count++;
    else {
      bCount += Math.floor(count / adjacency);
      count = 0;
    }
  }
  bCount += Math.floor(count / adjacency);

  return bCount;
};

const minDays = (bloomDay, m, k) => {
  if (bloomDay.length < m * k) return -1;

  let low = Math.min(...bloomDay),
    high = Math.max(...bloomDay),
    ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let BouquetsBuilt = getBouquetsCount(bloomDay, mid, k);
    if (BouquetsBuilt >= m) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1)); // Array, No. of Bouquets you need to make, Adjacency required
