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

const traverseLinkedList = (head) => {
  let temp = head,
    arr = [];
  while (temp !== null) {
    arr.push(temp.value);
    temp = temp.next;
  }

  console.log(arr.join(" ----> "));
};

const middleNode = function (head) {
  if (head === null || head.next === null) return head;

  let slow = head,
    fast = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === null || fast.next === null) break;
  }

  return slow;
};

let head = new Node(16);
head = insertNodeAtEnd(head, 123);
head = insertNodeAtEnd(head, 45);
head = insertNodeAtEnd(head, 576);
head = insertNodeAtEnd(head, 90);
head = insertNodeAtEnd(head, 4);
traverseLinkedList(head);
console.log(middleNode(head));
