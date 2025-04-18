const maxProductSubArray = (arr) => {
  let maxProd = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = i; j < arr.length; j++) {
      prod *= arr[j];
      maxProd = Math.max(maxProd, prod);
    }
  }
  return maxProd;
};

console.log(maxProductSubArray([1, 2, -3, 4]));
