const singleNumber = (nums) => {
  let xor;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
};

console.log(singleNumber([1, 2, 1, 2, 3, 4, 3]));
