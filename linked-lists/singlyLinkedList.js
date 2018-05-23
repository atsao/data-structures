class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = newNode;
      this._length++;
      return newNode;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;

    this._length++;
    return newNode;
  }

  remove(position) {
    if (!this._length) {
      throw new ReferenceError('Linked list is empty');
    }

    if (position > this._length || position < 1) {
      throw new ReferenceError('Position is invalid');
    }

    if (position === 1) {
      const previousHead = this.head;
      this.head = this.head.next;
      this._length--;

      return previousHead;
    }

    let count = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      count++;
      if (count === position) {
        let targetNode = currentNode.next.next;
        currentNode.next = targetNode;
        this._length--;
        return targetNode;
      }
    }
  }

  getNodeAt(position) {
    if (!this._length) {
      throw new ReferenceError('Linked list is empty');
    }

    if (position > this._length || position < 1) {
      throw new ReferenceError('Position is invalid');
    }

    if (position === 1) {
      return this.head;
    }

    let count = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      count++;
      if (count === position) {
        return currentNode.next;
      }
    }
  }
}

export default SinglyLinkedList;
