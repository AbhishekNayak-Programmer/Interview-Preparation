const generateRow = (row) => {
  let ans = 1,
    arr = [1];
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    arr.push(ans);
  }

  return arr;
};

const printPascalTriangle = (n) => {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    ans.push(generateRow(i));
  }

  return ans;
};

console.log(printPascalTriangle(5));
