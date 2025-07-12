const countSubStr = (s, k) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let distinct = 0,
      set = new Set();
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        distinct++;
        if (distinct > k) break;
      }
      if (distinct === k) count++;
    }
  }

  return count;
};

console.log(countSubStr("aba", 2));
