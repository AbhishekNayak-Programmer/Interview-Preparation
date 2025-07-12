const myAtoi = function (s) {
  if (!s) return 0;
  s = s.trim();

  let ans = 0,
    start = 0,
    sign = 1;
  if (s[0] === "-" || s[0] === "+") {
    if (s[0] === "-") sign = -1;
    start++;
  }
  const INT_MAX = 2147483647,
    INT_MIN = -2147483648;

  while (start < s.length && s[start] >= "0" && s[start] <= "9") {
    let digit = Number(s[start]);
    ans = ans * 10 + digit;
    start++;
  }

  ans = sign === -1 ? -ans : ans;

  if (ans < INT_MIN) return INT_MIN;
  if (ans > INT_MAX) return INT_MAX;

  return ans; // if our answer is inside the boundary of int min and max then return
};

console.log(myAtoi("1337c0d3"));
