const nextPermutation = function (nums) {
  if (nums.length < 2) return nums; // when one element or no element is there
  //Find the break point where current index is smaller than next index
  let len = nums.length,
    index = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      index = i;
      break;
    }
  }

  // If no index is found return the reverse of the array
  if (index === -1) return nums.reverse();

  //Find the smallest number greater than index found in rest of the right array and swap that element with the index
  for (let i = len - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      let temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      break;
    }
  }

  // Reverse the Right subarray to end
  let left = index + 1,
    right = len - 1;
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }

  return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
