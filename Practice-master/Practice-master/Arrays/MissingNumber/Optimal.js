const missingNumber = (nums) => {
  let n = nums.length,
    xor1 = 0,
    xor2 = 0;
  for (let i = 0; i < n; i++) {
    xor1 = xor1 ^ nums[i];
    xor2 = xor2 ^ i;
  }
  xor2 = xor2 ^ n;
  return xor1 ^ xor2;
};

console.log(missingNumber([0, 1, 2, 3, 5, 6]));
