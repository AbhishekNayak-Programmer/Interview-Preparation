const generateParenthesis = (n) => {
  let ans = [];

  const createParenthesis = (currentStr, openCount, closeCount) => {
    if (currentStr.length === 2 * n) return ans.push(currentStr);
    if (openCount < n)
      createParenthesis(currentStr + "(", openCount + 1, closeCount);
    if (closeCount < openCount)
      createParenthesis(currentStr + ")", openCount, closeCount + 1);
  };

  createParenthesis("", 0, 0);

  return ans;
};

console.log(generateParenthesis(5));
