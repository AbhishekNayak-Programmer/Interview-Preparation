const daysRequired = (weights, capacity) => {
  let days = 1,
    load = 0;
  for (let i = 0; i < weights.length; i++) {
    if (load + weights[i] > capacity) {
      days = days + 1;
      load = weights[i];
    } else load += weights[i];
  }
  return days;
};

// Binary Search Algorithm
const shipWithinDays = (weights, days) => {
  let high = weights.reduce((acc, el) => (acc += el), 0);
  let low = Math.max(...weights),
    ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let daysCount = daysRequired(weights, mid);
    if (daysCount <= days) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // arr of weights and days
