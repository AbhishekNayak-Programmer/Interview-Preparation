const singleNumberIII = (arr) => {
  let XORAll = arr.reduce((acc, num) => (acc = acc ^ num), 0);
  let rightMost = XORAll & -XORAll;

  let bucket1 = 0,
    bucket2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & rightMost) bucket1 = bucket1 ^ arr[i];
    else bucket2 = bucket2 ^ arr[i];
  }

  return [bucket1, bucket2];
};

console.log(singleNumberIII([1, 2, 1, 3, 2, 5]));
