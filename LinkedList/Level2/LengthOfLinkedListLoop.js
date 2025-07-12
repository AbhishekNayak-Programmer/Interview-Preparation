class Solution {
  // Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    let slow = head,
      fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
        let count = 1;
        fast = fast.next;

        while (fast !== slow) {
          fast = fast.next;
          count++;
        }

        return count;
      }
    }

    return 0;
  }
}
