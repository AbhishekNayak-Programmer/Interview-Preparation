const reverseLinkedList = (head) => {
  let current = head,
    frontNode = null,
    previousNode = null;

  while (current !== null) {
    frontNode = current.next;
    current.next = previousNode;
    previousNode = current;
    current = frontNode;
  }
  head = previousNode;

  return head;
};

const isPalindrome = function (head) {
  // Step 1 : Find the Middle of the Linked List
  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2 : Reverse the Second Half of the Linked List
  let newNode = reverseLinkedList(slow.next);
  let first = head,
    second = newNode;

  // Step 3 : Compare the reversed linked list with the start to mid
  while (second !== null) {
    if (first.val !== second.val) {
      reverseLinkedList(newNode);
      return false;
    }
    first = first.next;
    second = second.next;
  }

  reverseLinkedList(newNode);
  return true;
};
