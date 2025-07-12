class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
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
  newNode.prev = temp;
  return head;
};

const traverseLinkedList = (head) => {
  let temp = head,
    arr = [];
  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }

  console.log(arr.join(" <----> "));
};

let head = new Node(16);
insertNodeAtEnd(head, 123);
insertNodeAtEnd(head, 45);
insertNodeAtEnd(head, 576);
insertNodeAtEnd(head, 90);
insertNodeAtEnd(head, 4);
traverseLinkedList(head);
