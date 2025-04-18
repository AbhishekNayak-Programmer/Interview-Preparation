// Hashing
const fourSum = (nums, target) => {
  let ans = [],
    len = nums.length;
  nums.sort((a, b) => a - b); // Sorting the array to use two pointers approach and make it easy for us to store directly inside array without sorting everytime

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // If the current element is same with the previous element then move forward as array is sorted

    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // If the current element is same with the previous element then move forward as array is sorted

      let k = j + 1; // k position will always starts from the next index of j
      let l = len - 1; // l position will always starts from the end of the array

      // Until unless k and l comes to same pos or cross each other running the loop
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l]; // Sum of four elements
        if (sum < target)
          k++; // If sum is less and array is sorted then we need to move forward
        else if (sum > target)
          l--; // If sum is more and array is sorted then we need to move backward to get our element
        else {
          ans.push([nums[i], nums[j], nums[k], nums[l]]); // If Sum is target then push the array to ans
          k++;
          l--; // Incrementing the position to check for new elements
          while (k < l && nums[k] === nums[k - 1]) k++; // Handling edge case if next element is same as previous then we want the new element so move forward
          while (k < l && nums[l] === nums[l + 1]) l--; // Handling edge case if previous element is same as next then we want the new element so move backward
        }
      }
    }
  }

  // Removing Duplicates from the ans array
  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
