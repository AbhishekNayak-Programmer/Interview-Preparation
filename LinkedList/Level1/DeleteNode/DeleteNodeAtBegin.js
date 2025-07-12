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

const deleteNodeAtBegin = (head) => {
  if (head === null) return console.log("Invalid Linked List");
  head = head.next;
  return head;
};

const traverseLinkedList = (head) => {
  let temp = head,
    arr = [];
  while (temp !== null) {
    arr.push(temp.value);
    temp = temp.next;
  }

  console.log(arr.join(" ----> "));
};

let head = new Node(16);
insertNodeAtEnd(head, 123);
insertNodeAtEnd(head, 45);
insertNodeAtEnd(head, 576);
insertNodeAtEnd(head, 90);
insertNodeAtEnd(head, 4);
traverseLinkedList(head);
head = deleteNodeAtBegin(head);
traverseLinkedList(head);
