const singleNumberII = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i += 3) {
    if (arr[i] !== arr[i - 1]) return arr[i - 1];
  }

  return arr[arr.length - 1];
};

console.log(singleNumberII([0, 1, 0, 1, 0, 1, 99]));
