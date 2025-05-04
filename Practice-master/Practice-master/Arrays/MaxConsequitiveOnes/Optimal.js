const maxConsecutiveOnes = (arr) => {
  let max = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else count = 0;
  }

  return max;
};

console.log(maxConsecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0]));
