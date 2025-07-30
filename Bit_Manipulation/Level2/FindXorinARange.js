// Formula
// N = 1 = 1
// N = 2 = 1 ^ 2 = 3
// N = 3 = 1 ^ 2 ^ 3 = 0
// N = 4 = 1 ^ 2 ^ 3 ^ 4 = 4

const getXOR = (n) => {
  if (n % 4 === 0) return n;
  else if (n % 4 === 1) return 1;
  else if (n % 4 === 2) return n + 1;
  else if (n % 4 === 3) return 0;
};

const getXORinRange = (start, end) => {
  return getXOR(start - 1) ^ getXOR(end);
};

console.log(getXORinRange(4, 8));
// console.log(4 ^ 5 ^ 6 ^ 7 ^ 8); // Verify
