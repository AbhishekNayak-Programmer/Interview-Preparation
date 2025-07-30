const printLinearly = (current, end) => {
  if (current > end) return;
  console.log(current);
  return printLinearly(current + 1, end);
};

printLinearly(1, 10)
