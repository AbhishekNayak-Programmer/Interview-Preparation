const findElementInPascalTraingle = (rowInd, colInd) => {
  let res = 1;

  for (let i = 0; i < colInd; i++) {
    res = res * (rowInd - i);
    res = res / (i + 1);
  }
  return res;
};

// Applying NCR where N-1 and R-1 and N is Row and R is Column
console.log(findElementInPascalTraingle(5 - 1, 3 - 1));

// 4 * 3
// ----- = 6 Ans 
// 2 * 1
