const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0; // If the length of the array is 0 return 0 (Edge case)

  let longest = 1,
    set = new Set(nums); // Initially assuming the longest consecutive number is 1 and filling all the data inside the set

  //Iterating the complete set
  for (let item of set) {
    //Checking if the number is the starting number only if the set does not contains a previous number
    if (!set.has(item - 1)) {
      let count = 1,
        num = item; // Initialising the count with 1 as num itself is of length 1 and storing item inside number
      // Until unless we have a consecutive number present inside the array this loop will work and increment number and count
      while (set.has(num + 1)) {
        count++;
        num++;
      }
      longest = Math.max(count, longest); // storing the longest length by comparing current count with longest
    }
  }

  return longest; // return the longest count
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
