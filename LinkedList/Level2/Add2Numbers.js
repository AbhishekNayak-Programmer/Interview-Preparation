const addTwoNumbers = (l1, l2) => {
  let dummyNode = new ListNode(-1),
    currNode = dummyNode;
  let temp1 = l1,
    temp2 = l2,
    carry = 0;

  while (temp1 !== null || temp2 !== null) {
    let sum = carry;
    if (temp1) sum += temp1.val;
    if (temp2) sum += temp2.val;

    const newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    currNode.next = newNode;
    currNode = currNode.next;

    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }

  if (carry) {
    const newNode = new ListNode(carry);
    currNode.next = newNode;
  }

  return dummyNode.next;
};
