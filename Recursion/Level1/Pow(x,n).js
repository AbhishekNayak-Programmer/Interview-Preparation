const powFunc = (x, n) => {
  if (n === 0) return 1;

  let pow = Math.abs(n),
    result;

  if (pow % 2 === 0) result = powFunc(x * x, pow / 2);
  else if (pow % 2 === 1) result = powFunc(x * x, (pow - 1) / 2) * x;

  return result;
};

console.log(powFunc(2, 10));
