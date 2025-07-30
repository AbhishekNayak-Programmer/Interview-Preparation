const pow = (x, n) => {
  if (n === 0) return 1;
  let nCopy = n,
    ans = 1;
  if (n < 0) n = -n; // Making N as positive if that is negative example => -(-3) = 3

  while (n > 0) {
    if (n % 2 === 1) {
      ans = ans * x;
      n = n - 1;
    } else {
      x = x * x;
      n = Math.floor(n / 2);
    }
  }

  return nCopy < 0 ? 1 / ans : ans;
};

console.log(pow(2, 10));
