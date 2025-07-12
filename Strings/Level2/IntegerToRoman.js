const intToRoman = (num) => {
  const symbols = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ];
    let ans = "";

  for (let i = 0; i < symbols.length; i++) {
    let times = Math.floor(num / symbols[i][0]);
    ans += symbols[i][1].repeat(times);
    num = num % symbols[i][0];
  }

  return ans;
};

console.log(intToRoman(48)); // Output : XLVIII
