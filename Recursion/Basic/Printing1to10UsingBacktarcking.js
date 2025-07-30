// Printing in Linear manner from 1 to 10 using backtracking
const printUsingBacktract = (current) => {
  if (current === 0) return;
  printUsingBacktract(current - 1);
  console.log(current);
};

printUsingBacktract(10);

// Printing in Reverse Order from 10 to 1 using backtracking
const printUsingBacktractReverse = (current) => {
  if (current > 10) return;
  printUsingBacktractReverse(current + 1);
  console.log(current);
};

printUsingBacktractReverse(1);
