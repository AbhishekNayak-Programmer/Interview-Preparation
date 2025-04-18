const missingNumber = (nums) => {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
};

console.log(missingNumber([0, 1, 2, 3, 5, 6]));
