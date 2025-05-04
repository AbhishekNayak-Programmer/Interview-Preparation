const findValue = (num, times) => {
  let prod = 1;
  for (let i = 0; i < times; i++) prod *= num;
  return prod;
};

const findNthRoot = (times, value) => {
  let low = 1,
    high = value;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let prodVal = findValue(mid, times);
    if (prodVal === value) return mid;
    else if (prodVal < value) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};

console.log(findNthRoot(3, 27)); // Times and Value 3^3=27
