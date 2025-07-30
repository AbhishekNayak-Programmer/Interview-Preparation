const printAllPrimeFactors = (num) => {
  let ans = [];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ans.push(i);
      while (num % i === 0) num = num / i;
    }
  }
  if (num !== 1) ans.push(num);

  return ans;
};

console.log(printAllPrimeFactors(36));
console.log(printAllPrimeFactors(62));
