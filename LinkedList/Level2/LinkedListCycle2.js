//Solving this using tortoise and hare method
const detectCycle = (head) => {
  let fast = head,
    slow = head; // Initially both will be at same position

  // when fast is null or fast next will be null (in the case of no loop linked list then exit from loop and return null)
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Incrementing the slow by one step
    fast = fast.next.next; // Incrementing the fast by two steps

    // When fast and slow are equal
    if (fast === slow) {
      slow = head; // Resetting the slow to head position so that distance between slow pointer to loop start position and fast pointer to loop start position will be same

      // Until unless fast and slow will meet just increment both by 1
      while (fast !== slow) {
        fast = fast.next; // Moving one step
        slow = slow.next; // Moving one step
      }
      return fast; // When Both meets send any of the pointer as answer
    }
  }

  return null; // If no cycle is there return null
};
