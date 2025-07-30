const printAllDivisors = (num) => {
  let ans = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ans.push(i);
      if (num / i !== i) ans.push(num / i);
    }
  }

  return ans;
};

console.log(printAllDivisors(36).sort((a,b) => a - b));
