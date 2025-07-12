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

const deleteAtBegin = (head) => {
  if (head === null || head.next === null) return null;

  head = head.next;
  head.prev = null;

  return head;
};

const deleteByValue = (head, value) => {
  if (head === null) return console.log("Invalid Linked List");
  if (head.data === value) return deleteAtBegin(head);

  let temp = head;
  while (temp !== null) {
    if (temp.data === value) break;
    temp = temp.next;
  }

  if (temp === null) return head; // Position out of bounds

  let prevNode = temp.prev;
  let nextNode = temp.next;

  if (prevNode) prevNode.next = temp.next;
  if (nextNode) nextNode.prev = prevNode;

  return head;
};

let head = new Node(16);
head = insertNodeAtEnd(head, 123);
head = insertNodeAtEnd(head, 45);
head = insertNodeAtEnd(head, 576);
head = insertNodeAtEnd(head, 90);
head = insertNodeAtEnd(head, 4);
traverseLinkedList(head);
head = deleteByValue(head, 576);
traverseLinkedList(head);
