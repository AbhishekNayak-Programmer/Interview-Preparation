let str = "madam",
  n = str.length;
const palindromeString = (left) => {
  let right = n - 1 - left;
  if (left >= n / 2) return true;
  if (str[right] !== str[left]) return false;
  return palindromeString(left + 1);
};

console.log(palindromeString(0));
