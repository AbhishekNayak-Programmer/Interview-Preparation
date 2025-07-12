const findMiddleNode = (head) => {
  if (head === null || head.next === null) return head;
  let slow = head,
    fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const sortTwoList = (list1, list2) => {
  let dummyNode = new ListNode(-1, null);
  let temp = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  if (list1 !== null) temp.next = list1;
  else temp.next = list2;

  return dummyNode.next;
};

const sortList = function (head) {
  if (head === null || head.next === null) return head;

  let middleNode = findMiddleNode(head);
  let right = middleNode.next;
  middleNode.next = null;
  let left = head;

  left = sortList(left);
  right = sortList(right);

  return sortTwoList(left, right);
};
