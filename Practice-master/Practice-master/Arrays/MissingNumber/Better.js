const missingNumber = (nums) => {
  let n = nums.length;
  let expectedNums = (n * (n + 1)) / 2;
  console.log(expectedNums);
  const curSum = nums.reduce((acc, el) => (acc += el), 0);
  return expectedNums - curSum;
};

console.log(missingNumber([0, 1, 2, 3, 5, 6]));
