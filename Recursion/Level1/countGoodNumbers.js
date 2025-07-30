// Leetcode 1922. Count Good Numbers
const countGoodNumbers = (n) => {
  let evenPlaces = Math.ceil(n / 2);
  let oddPlaces = Math.floor(n / 2);
  let MOD = 1000000007n; 

  const pow = (x, n) => {
    let res = 1n;
    x = BigInt(x);
    n = BigInt(n);

    while (n > 0) {
      if (n % 2n === 1n) res = res * x;
      x = (x * x) % MOD;
      n = n / 2n;
    }

    return res;
  };

  return Number((pow(5, evenPlaces) * pow(4, oddPlaces)) % MOD);
};

console.log(countGoodNumbers(50));
