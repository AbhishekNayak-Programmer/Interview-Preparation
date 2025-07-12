class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const insertNodeAtEnd = (head, value) => {
  let newNode = new Node(value);
  if (head === null) return newNode;
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = newNode;
  return head;
};

const head = new Node(16);
console.log(insertNodeAtEnd(head, 123));
