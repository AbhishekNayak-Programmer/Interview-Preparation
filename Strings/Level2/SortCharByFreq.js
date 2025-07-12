const frequencySort = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) map.set(s[i], (map.get(s[i]) || 0) + 1);
  let sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedArr.map((el) => el[0].repeat(el[1])).join("");
};

console.log(frequencySort("tree"));
