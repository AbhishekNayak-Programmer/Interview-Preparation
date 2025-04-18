const missingAndRepeating = (arr) => {
  let repeating = -1,
    missing = -1,
    temp = new Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    temp[index] = temp[index] + 1;
  }

  for (let i = 1; i <= temp.length; i++) {
    if (temp[i] === 0) missing = i;
    else if (temp[i] === 2) repeating = i;
  }

  return [repeating, missing];
};

console.log(missingAndRepeating([1, 2, 3, 4, 4]));
