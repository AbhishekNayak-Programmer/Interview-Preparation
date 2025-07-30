const solveRecursively = (
  index,
  currExp,
  currRes,
  target,
  prevNum,
  ans,
  numStr
) => {
  //Base case when index reaches the length of numStr we simply check res and target based on that we push or return
  if (index === numStr.length) {
    if (currRes === target) ans.push(currExp);
    return;
  }

  for (let i = index; i < numStr.length; i++) {
    if (i > index && numStr[index] === "0") break; // prevent numbers with leading zeros

    let currStr = numStr.substring(index, i + 1); // Our current substring from index to i+1
    let currNum = Number(currStr); // Converting currNum as we have to do math operation with currRes

    if (index === 0) {
      // When first time we dont have any expression then we have to handle the case like this
      solveRecursively(i + 1, currStr, currNum, target, currNum, ans, numStr);
    } else {
      // For addition its easy to add current num to res and store the previous number every time
      solveRecursively(
        i + 1,
        currExp + "+" + currNum,
        currRes + currNum,
        target,
        currNum,
        ans,
        numStr
      );

      // For substract you need to substract current num from res and store -currentNum as previous
      solveRecursively(
        i + 1,
        currExp + "-" + currStr,
        currRes - currNum,
        target,
        -currNum,
        ans,
        numStr
      );

      // For multiplication we have to first substarct res - previous and do our multiply with previous * current due to precesion and then store previous * current number as previous
      solveRecursively(
        i + 1,
        currExp + "*" + currNum,
        currRes - prevNum + prevNum * currNum,
        target,
        prevNum * currNum,
        ans,
        numStr
      );
    }
  }
};

const addOperators = function (num, target) {
  let ans = [];
  if (num.length >= 1) solveRecursively(0, "", 0, target, 0, ans, num); // Will only call if we have a num lenght greater or equal to 1
  return ans;
};

console.log("123", 6);
