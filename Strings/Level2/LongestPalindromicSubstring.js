const longestPalindrome = function (s) {
  let len = s.length,
    max = 0,
    ans = "";
  if (len <= 1) return s;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let left = i,
        right = j;

      while (left < right && s[left] === s[right]) {
        left++;
        right--;
      }

      if (left >= right && j - i + 1 > max) {
        max = j - i + 1;
        ans = s.slice(i, j + 1);
      }
    }
  }

  return ans;
};

console.log(longestPalindrome("babad"));
