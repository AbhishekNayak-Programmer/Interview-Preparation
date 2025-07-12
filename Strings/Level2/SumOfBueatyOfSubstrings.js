const getMaxMin = (map) => {
  let max = -Infinity,
    min = Infinity;
  for (let [_, value] of map) {
    max = Math.max(max, value);
    min = Math.min(min, value);
  }

  return [max, min];
};

const beautySum = function (s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let hashMap = new Map();
    for (let j = i; j < s.length; j++) {
      hashMap.set(s[j], (hashMap.get(s[j]) || 0) + 1);
      const [max, min] = getMaxMin(hashMap);
      ans = ans + max - min;
    }
  }

  return ans;
};

console.log(beautySum("aabcb"));
