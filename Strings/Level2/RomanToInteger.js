const romanToInt = function (s) {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let currentNum = symbols[s[i]],
      nextNum = symbols[s[i + 1]];
    if (currentNum < nextNum) {
      ans = ans + nextNum - currentNum;
      i++;
    } else ans += currentNum;
  }

  return ans;
};

console.log(romanToInt("XLVIII")); // Output - 48
