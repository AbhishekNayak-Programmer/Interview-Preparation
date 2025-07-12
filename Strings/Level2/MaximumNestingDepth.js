const maxDepth = function (s) {
  let count = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    if (s[i] === ")") count--;
    max = Math.max(max, count);
  }
  return max;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
