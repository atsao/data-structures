import { assert } from 'chai';

import Queue from './queue';

describe('Queue', () => {
  let queue = new Queue();

  it('contains an enqueue method', () => {
    assert.isFunction(queue.enqueue);
  });

  it('contains a dequeue method', () => {
    assert.isFunction(queue.dequeue);
  });

  it('contains an items instance property', () => {
    assert.isDefined(queue.items);
  });

  it('creates an empty items list on initialization', () => {
    assert.equal(queue.items.length, 0);
  });

  describe('enqueue', () => {
    it('adds specified item to queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      assert.equal(queue.items.length, 3);
      assert.deepEqual(queue.items, [1, 2, 3]);
    });
  });

  describe('dequeue', () => {
    it('removes the first item added to the queue', () => {
      assert.deepEqual(queue.dequeue(), 1);
      assert.equal(queue.items.length, 2);
      assert.deepEqual(queue.dequeue(), 2);
      assert.deepEqual(queue.dequeue(), 3);
    });

    it('does not decrement size of an empty queue', () => {
      assert.equal(queue.items.length, 0);
      queue.dequeue();
      assert.equal(queue.items.length, 0);
    });
  });
});
