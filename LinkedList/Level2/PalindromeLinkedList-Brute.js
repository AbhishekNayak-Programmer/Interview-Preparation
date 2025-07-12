const isPalindrome = function (head) {
  let arr = [],
    temp = head;

  while (temp !== null) {
    arr.push(temp.val);
    temp = temp.next;
  }

  temp = head;
  for (let i = arr.length - 1; i >= 0; i--) {
    let poppedItem = arr.pop();
    if (poppedItem !== temp.val) {
      return false;
    } else temp = temp.next;
  }

  return true;
};
