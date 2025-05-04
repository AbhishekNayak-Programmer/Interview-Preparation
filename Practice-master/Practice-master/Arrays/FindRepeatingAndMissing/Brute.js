const missingAndRepeating = (arr) => {
  let repeating = -1,
    missing = -1;

  for (let i = 1; i <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) count++;
    }
    if (count === 0) missing = i;
    if (count === 2) repeating = i;

    if(repeating !== -1 && missing !== -1) break;
  }

  return [repeating, missing];
};

console.log(missingAndRepeating([1, 2, 3, 4, 4]));
