//Applying Moore Voting Algorithms for Canceling and getting our majority element
const majorityElement = function (nums) {
  let el1,
    count1 = 0,
    el2,
    count2 = 0; // Initially setting the count values to 0 and el1 and el2 are undelcared as we will have either 1 or 2 answers so taken el1 and el2

  // Inside this Iteration we are checking that if the count1 is 0 and current element in nums is not equal to the e2 then we can update the e1 value and count set to 1. Same we are doing this with el2 and count2 and then when we are getting matching element with el1 then count1 inc and when el2 match count2 inc and when both are not matched count1 and count2 dec
  for (let i = 0; i < nums.length; i++) {
    if (count1 === 0 && el2 !== nums[i]) {
      el1 = nums[i];
      count1 = 1;
    } else if (count2 === 0 && el1 !== nums[i]) {
      el2 = nums[i];
      count2 = 1;
    } else if (nums[i] === el1) count1++;
    else if (nums[i] === el2) count2++;
    else {
      count1--;
      count2--;
    }
  }

  //After getting the Answer we are Validating the Answer because there may be some values stored inside the el1 or el2 that may not be the answer check for testcase 1 you will understand
  (count1 = 0), (count2 = 0); // Reinitialising the counters 1 and 2
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === el1) count1++;
    else if (nums[i] === el2) count2++;
  }

  let requirement = Math.floor(nums.length / 3) + 1; // Validation Success Limit as per question
  if (count1 >= requirement && count2 >= requirement) return [el1, el2];
  if (count1 >= requirement) return [el1];
  if (count2 >= requirement) return [el2];
  return [];
};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
