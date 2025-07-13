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

const getKthNode = (head, k) => {
  let temp = head;

  while (temp !== null) {
    if (k === 1) return temp;
    temp = temp.next;
    k--;
  }

  return null;
};

const reverseKGroup = function (head, k) {
  let temp = head,
    previousNode = null;

  while (temp !== null) {
    let kthNode = getKthNode(temp, k);

    if (kthNode === null) {
      if (previousNode) previousNode.next = temp;
      break;
    }

    let nextNode = kthNode.next;
    kthNode.next = null;
    reverseLinkedList(temp);

    if (head === temp) head = kthNode;
    else previousNode.next = kthNode;

    previousNode = temp;
    temp = nextNode;
  }

  return head;
};
