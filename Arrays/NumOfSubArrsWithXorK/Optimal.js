const NumOfSubArrWithXorK = (arr, k) => {
  let len = arr.length,
    map = new Map(),
    count = 0,
    xor = 0;
  map.set(0, 1);

  for (let i = 0; i < len; i++) {
    xor = xor ^ arr[i];

    //Formula
    let x = xor ^ k;
    if (map.has(x)) {
      count += map.get(x);
    }

    if (map.has(xor)) map.set(xor, map.get(xor) + 1);
    else map.set(xor, 1);
  }

  return count;
};

console.log(NumOfSubArrWithXorK([4, 2, 2, 6, 4], 6));
