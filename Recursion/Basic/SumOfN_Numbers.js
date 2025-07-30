const sumOfN_Numbers = (sum, n) => {
  if (n <= 0) return sum;
  return sumOfN_Numbers(sum + n, n - 1);
};

const ans = sumOfN_Numbers(0, 5);
console.log(ans);
