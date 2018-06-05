class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(item) {
    const node = new Node(item);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head; // Start current pointer at head

      // Iterate to find where current.next is null (end of list)
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length += 1;
  }

  insert(item, position) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    const node = new Node(item);
    let current = this.head; // Start current pointer at head
    let previous; // Track item prior to one being inserted
    let index = 0; // Track current position

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index += 1;
      }

      node.next = current; // Link node to current item
      previous.next = node; // Set previous next to newly inserted
    }
  }

  remove(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head; // Start current pointer at head
    let previous; // Track item prior to one being deleted
    let index = 0; // Track current position

    if (position === 0) {
      this.head = current.next;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index += 1;
      }
      previous.next = current.next; // Link previous' next to current next
    }

    this.length -= 1;

    return current.value;
  }
}

export default SinglyLinkedList;
