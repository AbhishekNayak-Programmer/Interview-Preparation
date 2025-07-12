const removeOuterParentheses = (s) => {
  let counter = 0,
    ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (counter > 0) ans += "(";
      counter++;
    } else if (s[i] === ")") {
      if (counter > 1) ans += ")";
      counter--;
    }
  }

  return ans;
};

console.log(removeOuterParentheses("(()())(())"));
