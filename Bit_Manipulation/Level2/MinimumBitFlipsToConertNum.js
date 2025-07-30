const MinFlipsToConvert = (num, goal) => {
  let XORVal = num ^ goal,
    countFlips = 0;

  while (XORVal > 1) {
    if (XORVal % 2 === 1) countFlips++;
    XORVal = Math.floor(XORVal / 2); 
  }

  if (XORVal === 1) countFlips++;
  return countFlips;
};

console.log(MinFlipsToConvert(7, 13));

// 0 1 1 1
// 1 1 0 1
//   XOR
// 1 0 1 0 = 10

// Loop
// 10/2
// 5 / 2 --- 1
// 2 / 2
// 1 ---- 1
