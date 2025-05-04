const getHours = (bananaPerHour, piles) => {
  let hoursCount = 0;
  for (let i = 0; i < piles.length; i++) {
    hoursCount += Math.ceil(piles[i] / bananaPerHour);
  }
  return hoursCount;
};

const minEatingSpeed = (piles, h) => {
  let low = 0,
    high = Math.max(...piles),
    ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let hours = getHours(mid, piles);
    if (hours <= h) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 8 is hours and array is piles of bananas
