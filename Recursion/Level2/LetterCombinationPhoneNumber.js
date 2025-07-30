function backtrack(combination, next_digits, phone_map, output) {
  if (next_digits.length === 0) return output.push(combination);
  // When no more digits are there we are returning the combination made
  else {
    const letters = phone_map[next_digits[0] - "2"]; // Get letters over the digit and as its a array and we dont have any char on digit 1 so -2

    // Iterating over each letter of the letters
    for (const letter of letters) {
      backtrack(combination + letter, next_digits.slice(1), phone_map, output); // calling recursion to form combination with next digit
    }
  }
}

const letterCombinations = function (digits) {
  if (digits.length === 0) return []; // When no digit is there we will not have any combinations
  const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
    output = []; // phone map stores all the characters that are available in the digits

  backtrack("", digits, phone_map, output); // Initial calling of recursion
  return output; // returning all combinations
};

console.log("23");
