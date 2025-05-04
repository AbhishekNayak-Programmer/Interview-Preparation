const getRowInPascalTriangle = (row) => {
  let arr = [1],
    ans = 1;
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    arr.push(ans);
  }

  return arr;
};

console.log(getRowInPascalTriangle(4));
