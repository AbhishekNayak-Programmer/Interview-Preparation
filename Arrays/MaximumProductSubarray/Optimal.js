const maxProductSubArray = (arr) => {
  let maxProd = -Infinity,
    prefix = 1,
    suffix = 1;

  for (let i = 0; i < arr.length; i++) {
    //Handle the Edge case of 0
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix *= arr[i];
    suffix *= arr[arr.length - 1 - i];

    maxProd = Math.max(maxProd, Math.max(suffix, prefix));
  }

  return maxProd;
};

console.log(maxProductSubArray([1, 2, -3, 4]));
