const sqRootOfANum = (n) => {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    let num = i * i;
    if (num <= n) ans = i;
  }

  return ans;
};

console.log(sqRootOfANum(36));
