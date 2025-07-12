const longestCommonPrefix = (strs) => {
  strs.sort();

  let firstword = strs[0],
    lastword = strs[strs.length - 1];
  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] !== lastword[i]) return firstword.slice(0, i);
  }

  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight", "fffff"]));
