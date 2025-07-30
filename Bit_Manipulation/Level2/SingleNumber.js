const singleNumber = (arr) => {
  return arr.reduce((acc, num) => (acc = acc ^ num), 0);
};

console.log(singleNumber([1, 1, 2, 2, 3, 3, 4]));
