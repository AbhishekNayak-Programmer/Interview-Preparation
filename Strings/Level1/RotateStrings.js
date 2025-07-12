const rotateString = function (s, goal) {
  if (s === goal) return true;
  let len = s.length;

  while (len > 0) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
    len--;
  }

  return false;
};

console.log(rotateString("abcde", "cadeab"));
