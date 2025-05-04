// Target is 0
const threeSum = function (nums) {
  let ans = [],
    len = nums.length;
  nums.sort((a, b) => a - b); // Sorting the array to use two pointers approach and make it easy for us to store directly inside array without sorting everytime

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // If the current element is same with the previous element then move forward as array is sorted

    let j = i + 1; // J position will always starts from the next index of i
    let k = len - 1; // K position will always starts from the end of the array

    // Until unless j and k comes to same pos or cross each other running the loop
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]; // Sum of three elements
      if (sum < 0)
        j++; // If sum is less and array is sorted then we need to move forward
      else if (sum > 0)
        k--; // If sum is more and array is sorted then we need to move backward to get our element
      else {
        ans.push([nums[i], nums[j], nums[k]]); // If Sum is zero then push the array to ans
        j++;
        k--; // Incrementing the position to check for new elements
        while (j < k && nums[j] === nums[j - 1]) j++; // Handling edge case if next element is same as previous then we want the new element so move forward
        while (j < k && nums[k] === nums[k + 1]) k--; // Handling edge case if previous element is same as next then we want the new element so move backward
      }
    }
  }

  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
