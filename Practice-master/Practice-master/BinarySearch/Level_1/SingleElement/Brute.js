const singleElement = (arr) => {
  let len = arr.length;
  if (len === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[len - 1] !== arr[len - 2]) return arr[len - 1];

  for (let i = 1; i <= len - 2; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return i;
  }

  return -1;
};

console.log(singleElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));
