const NumOfSubArrWithXorK = (arr, k) => {
  let len = arr.length,
    count = 0;

  for (let i = 0; i < len; i++) {
    let xor = 0;
    for (let j = i; j < len; j++) {
      xor = xor ^ arr[j];
      if (xor === k) count++;
    }
  }

  return count;
};

console.log(NumOfSubArrWithXorK([4, 2, 2, 6, 4], 6));
