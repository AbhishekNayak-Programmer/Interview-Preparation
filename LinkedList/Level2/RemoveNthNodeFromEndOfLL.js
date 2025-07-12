const removeNthFromEnd = function (head, n) {
  if (head === null || (head.next === null && n === 1)) return null; // Handling the case where head is null or just have a single node
  let fast = head,
    slow = head; // storing the head reference in fast and slow

  for (let i = 0; i < n; i++) fast = fast.next; // Moving fast to nth position of the linked list

  if (fast === null) return head.next; // If we have to delete head just returning head.next

  // Until fast reaches to end or null moving forward and incrementing slow and fast pointers by one step so that at last slow will point to the nth - 1 node from last
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next; // Connecting the nodes so middle node in between that will be detached

  return head;
};
