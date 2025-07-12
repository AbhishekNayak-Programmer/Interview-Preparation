class Solution {
  segregate(head) {
    if (head === null || head.next === null) return head;
    let zeroHead = new Node(-1),
      oneHead = new Node(-1),
      twoHead = new Node(-1);
    let zero = zeroHead,
      one = oneHead,
      two = twoHead,
      temp = head;

    while (temp !== null) {
      if (temp.data === 0) {
        zero.next = temp;
        zero = temp;
      } else if (temp.data === 1) {
        one.next = temp;
        one = temp;
      } else {
        two.next = temp;
        two = temp;
      }
      temp = temp.next;
    }

    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
    two.next = null;

    return zeroHead.next;
  }
}
