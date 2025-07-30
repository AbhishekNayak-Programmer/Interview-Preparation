const SmallestPrimeFactor = (n) => {
  let arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i < arr.length; i++) arr[i] = i;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === i) {
      for (let j = i * i; j <= n; j += i) {
        if (arr[j] === j) arr[j] = i;
      }
    }
  }

  let ans = [];
  while (n !== 1) {
    ans.push(arr[n]);
    n = Math.floor(n / arr[n]);
  }
  return ans;
};

console.log(SmallestPrimeFactor(36));
console.log(SmallestPrimeFactor(12246));
