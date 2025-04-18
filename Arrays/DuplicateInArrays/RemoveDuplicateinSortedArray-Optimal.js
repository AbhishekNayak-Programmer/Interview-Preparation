// 2 duplicate is allowed after that not
const removeDuplicate = (arr) => {
  let left = 1;

  for (let right = 2; right < arr.length; right++) {
    if (arr[right] !== arr[left - 1]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.slice(0, left + 1);
};

console.log(removeDuplicate([1, 1, 2, 2, 2, 3, 4, 5, 5, 5]));
