const SinglyLinkedList = require('../singlyLinkedList');
const assert = require('chai').assert;

describe('Linked Lists', () => {
  describe('Singly-Linked List', () => {
    let linkedList = new SinglyLinkedList();

    it('contains an append method', () => {
      assert.isFunction(linkedList.append);
    });

    it('contains a remove method', () => {
      assert.isFunction(linkedList.remove);
    });

    it('contains a getNodeAt method', () => {
      assert.isFunction(linkedList.getNodeAt);
    });

    describe('append', () => {
      beforeEach(() => {
        linkedList = new SinglyLinkedList();
      });

      it('returns a new node when appending a new value', () => {
        const newNode = {
          value: 1,
          next: null
        };
        assert.deepEqual(linkedList.append(1), newNode);
      });

      it('adds a node to an empty list', () => {
        assert.deepEqual(linkedList.head, null);
        linkedList.append(1);
        assert.deepEqual(linkedList.head.value, 1);
      });

      it('adds a node to a non-empty list', () => {
        linkedList.append(1);
        assert.deepEqual(linkedList.head.value, 1);
        linkedList.append(2);
        assert.deepEqual(linkedList.head.next.value, 2);
        linkedList.append(3);
        assert.deepEqual(linkedList.head.next.next.value, 3);
      });
    });

    describe('remove', () => {
      beforeEach(() => {
        linkedList = new SinglyLinkedList();
      });

      it('returns an error when removing a node in an empty list', () => {
        assert.throws(() => linkedList.remove(1), ReferenceError)
      });

      it('returns an error when removing a node at an invalid position', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        assert.throws(() => linkedList.remove(4), ReferenceError)
      });

      it('returns and removes the head at position 1', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        assert.deepEqual(linkedList.head.value, 1);
        linkedList.remove(1);
        assert.deepEqual(linkedList.head.value, 2);
      });

      it('returns and removes a node not at position 1', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        assert.deepEqual(linkedList.head.next.next.next.value, 4);
        linkedList.remove(3);
        assert.deepEqual(linkedList.head.next.next.value, 4);
      });

      it('decrements the length when removing a valid node', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        assert.deepEqual(linkedList._length, 4);
        linkedList.remove(3);
        assert.deepEqual(linkedList._length, 3);
      });
    });

    describe('getNodeAt', () => {
      beforeEach(() => {
        linkedList = new SinglyLinkedList();
      });

      it('returns error for invalid position specified', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        assert.throws(() => linkedList.getNodeAt(4), ReferenceError);
      });

      it('returns head if position 1 specified', () => {
        let head = linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        assert.deepEqual(linkedList.getNodeAt(1), head);
        assert.deepEqual(linkedList.head, head);
      });

      it('returns node at valid position', () => {
        linkedList.append(1);
        let node2 = linkedList.append(2);
        linkedList.append(3);
        assert.deepEqual(linkedList.getNodeAt(2), node2);
      });
    });
  });
});
