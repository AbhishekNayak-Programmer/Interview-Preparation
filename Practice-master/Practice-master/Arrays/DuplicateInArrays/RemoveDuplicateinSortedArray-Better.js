// No duplicate is allowed
const removeDuplicate = (arr) => {
  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.slice(0, left + 1);
};

console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 5]));
