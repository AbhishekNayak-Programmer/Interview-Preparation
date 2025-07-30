const subsets = (arr) => {
  let ans = [],
    combinations = Math.pow(2, arr.length);

  for (let num = 0; num < combinations; num++) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
      // Take example of num = 0 and i = 1 you will understand
      // 0 0 0 = 0 = num
      // 0 0 1 = 1 = i
      // 0 1 0 = 1 << i
      if (num & (1 << i)) list.push(arr[i]);
    }
    ans.push(list);
  }

  return ans;
};

console.log(subsets([1, 2, 3]));
