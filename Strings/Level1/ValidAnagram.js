const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false;
    else map.set(t[i], map.get(t[i]) - 1);
  }

  for (let [key, value] of map) {
    if (value !== 0) return false;
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
