const missingAndRepeating = (arr) => {
  let n = arr.length;
  let SN = (n * (n + 1)) / 2;
  let S2N = (n * (n + 1) * (2 * n + 1)) / 6;

  // Calculate S and S2
  let S = 0,
    S2 = 0;
  for (i = 0; i < arr.length; i++) {
    S = S + arr[i];
    S2 = S2 + arr[i] * arr[i];
  }

  // S - S2 = X - Y
  let val1 = S - SN;
  // S2 - S2N = X2 - Y2
  let val2 = S2 - S2N;

  // X+Y =  X2 - Y2 /  X - Y
  val2 = val2 / val1;

  const x = (val1 + val2) / 2
  const y = x - val1;
  return [x, y]; // x is repeating and y is missing
};

console.log(missingAndRepeating([1, 2, 3, 4, 4]));
