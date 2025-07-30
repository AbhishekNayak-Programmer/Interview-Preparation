const printName = (n) => {
  if (n === 0) return;
  console.log("Abhishek Nayak")
  return printName(n - 1);
};

printName(5);
