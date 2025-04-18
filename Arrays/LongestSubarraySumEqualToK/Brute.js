// Works for +ve, -ve and 0 based array
const longestConsequtiveSubArraySum = (arr, k) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
};

console.log(longestConsequtiveSubArraySum([1, 2, 3, 4, 1, 2, 4], 7));
