// As we know we will return the array in order [even,odd,even,odd] so pos index starts with 0 and neg index starts with 1 then we will store the values inside ans array based on two pointers i.e, pos and neg and every time increment the pointers to 2 as next pos will be after 2 indexes current + next index
const rearrangeArray = function (nums) {
  let ans = [],
    pos = 0,
    neg = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[pos] = nums[i];
      pos += 2;
    } else {
      ans[neg] = nums[i];
      neg += 2;
    }
  }

  return ans;
};

console.log(rearrangeArray([1, 2, -4, -5, -3, 4]));
