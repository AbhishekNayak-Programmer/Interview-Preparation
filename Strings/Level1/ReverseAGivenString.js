const reverseWords = function (s) {
  s = s.split(" ");
  let ans = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i]) ans = ans + s[i] + " ";
  }

  return ans.slice(0, ans.length - 1);
};

console.log(reverseWords("the sky is blue"));
