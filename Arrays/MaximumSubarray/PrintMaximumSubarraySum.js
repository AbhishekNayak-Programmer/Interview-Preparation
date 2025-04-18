const maxSubArray = (nums) => {
  let max = -Infinity,
    sum = 0,
    start = -1,
    end = -1,
    starting = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) starting = i;
    sum += nums[i];
    if (sum > max) {
      start = starting;
      end = i;
      max = sum;
    }
    if (sum < 0) sum = 0;
  }

  console.log(
    "Starting Index is : ",
    start,
    " Ending index is : ",
    end,
    " and Maximum Sum is : ",
    max,
    "array is : ",
    nums.slice(start, end)
  );
};

maxSubArray([2, -3, 4, -2, 2, 1, -1, 4]);
