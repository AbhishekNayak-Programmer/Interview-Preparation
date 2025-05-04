const sqRootOfANum = (n) => {
  let low = 1,
    high = n,
    ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }

  return ans;
};

console.log(sqRootOfANum(28));
