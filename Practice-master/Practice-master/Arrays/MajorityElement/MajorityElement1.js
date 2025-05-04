// Moore's Voting Algorithm to find Majority Element
const MajorityElement = (nums) => {
  //Initially Storing first element as majority el and count as 1
  let majorityEl = nums[0],
    count = 1,
    len = nums.length;

  //Iterating from 1 to end of the array
  for (let i = 1; i < len; i++) {
    // If Count becomes zero means elements canceled each other then replacing the current el as majority el and count is 1
    if (count === 0) {
      majorityEl = nums[i];
      count = 1;
    } else if (nums[i] === majorityEl)
      count++; // If same number as majority el then count increases
    else if (nums[i] !== majorityEl) count--; // If different number as majority el then count decreases
  }

  // At last validating our Majority Element that it is majority or not
  let cnt = 0;
  for (let i = 0; i < len; i++) if (nums[i] == majorityEl) cnt++;
  if (cnt > Math.floor(len / 2)) return majorityEl; // Only if it satisfies our condition we return majorityEl
  return -1; // If No majorityEl found we return -1;
};

console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]));
