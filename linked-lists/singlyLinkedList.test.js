import { expect } from 'chai';

import SinglyLinkedList from './singlyLinkedList';

describe('Singly-Linked List', () => {
  const linkedList = new SinglyLinkedList();

  it('should have a head instance property', () => {
    expect(linkedList.head).to.not.be.undefined;
  });

  it('should have an append method', () => {
    expect(linkedList.append).to.be.a('function');
  });

  it('should have an insert method', () => {
    expect(linkedList.insert).to.be.a('function');
  });

  it('should have a remove method', () => {
    expect(linkedList.remove).to.be.a('function');
  });

  it('should have remove method', () => {
    expect(linkedList.remove).to.be.a('function');
  });

  describe('Append', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should add an item to the end of an empty list', () => {
      expect(linkedList.head).to.deep.equal(null);
      linkedList.append(1);
      expect(linkedList.head.value).to.deep.equal(1);
    });

    it('should add an item to the end of an existing list', () => {
      expect(linkedList.head).to.deep.equal(null);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(2);
      expect(linkedList.head.next.next.value).to.deep.equal(3);
    });
  });

  describe('Insert', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should insert an item at the beginning of the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(2);
      linkedList.insert(0, 0);
      expect(linkedList.head.value).to.deep.equal(0);
      expect(linkedList.head.next.value).to.deep.equal(1);
      expect(linkedList.head.next.next.value).to.deep.equal(2);
    });

    it('should insert an item elsewhere in the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(2);
      linkedList.insert(0, 1);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(0);
      expect(linkedList.head.next.next.value).to.deep.equal(2);
    });
  });

  describe('Remove', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should remove the first item in the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(2);
      expect(linkedList.head.next.next.value).to.deep.equal(3);
      linkedList.remove(0);
      expect(linkedList.head.value).to.deep.equal(2);
      expect(linkedList.head.next.value).to.deep.equal(3);
    });

    it('should remove a non-first item from the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(2);
      expect(linkedList.head.next.next.value).to.deep.equal(3);
      linkedList.remove(1);
      expect(linkedList.head.value).to.deep.equal(1);
      expect(linkedList.head.next.value).to.deep.equal(3);
    });
  });
});
