const isPalindrome = (str) => str.split("").reverse().join("") === str; // Function to check Palindrome

const partition = function (s) {
  const ans = [];

  const recursivePalindromes = (partitionIndex, str, current) => {
    if (partitionIndex === str.length) return ans.push([...current]); // When index reaches end we push our current stored array of palindromes

    for (let i = partitionIndex; i < str.length; i++) {
      let s = str.slice(partitionIndex, i + 1); // Substring on which palindrome check will happen

      // when substring is a valid palindrome then only we have to check for inner substrings otherwise not
      if (isPalindrome(s)) {
        current.push(s); // as s is palindrome pushed into current
        recursivePalindromes(i + 1, str, current); // checking for the next palindrome in the str
        current.pop(); // while backtracking remove the pushed element from current
      }
    }
  };

  recursivePalindromes(0, s, []); // Initially calling function
  return ans;
};

console.log(partition("aab"));
