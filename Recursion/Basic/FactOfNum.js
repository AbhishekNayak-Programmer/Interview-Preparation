const factorial = (fact, n) => {
  if (n < 1) return fact;
  return factorial(fact * n, n - 1);
};

console.log(factorial(1, 5));
