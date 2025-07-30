const printAllPrimeNumbersBeforeN = (n) => {
  let arr = new Array(n + 1).fill(1);
  arr[0] = 0;
  arr[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === 1) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = 0;
      }
    }
  }

  for (let i = 2; i < arr.length - 1; i++) {
    if (arr[i] === 1) console.log(i);
  }
};

printAllPrimeNumbersBeforeN(36);
