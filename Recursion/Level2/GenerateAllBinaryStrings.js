const generateBinaryStrings = (n) => {
  let res = [];

  const backTrack = (currentStr, lastChar) => {
    if (currentStr.length === n) return res.push(currentStr);

    backTrack(currentStr + "0", "0");
    if (lastChar !== "1") {
      backTrack(currentStr + "1", "1");
    }
  };

  backTrack("", "");

  return res;
};

console.log(generateBinaryStrings(3));
