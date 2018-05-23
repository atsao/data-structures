import { assert } from 'chai';

import Stack from './Stack';

describe('Stack', () => {
  let stack = new Stack();

  it('contains a push method', () => {
    assert.isFunction(stack.push);
  });

  it('contains a pop method', () => {
    assert.isFunction(stack.pop);
  });

  it('contains a size instance property', () => {
    assert.isDefined(stack._size);
  });

  it('contains a storage instance property', () => {
    assert.isDefined(stack._storage);
  });

  it('creates an empty stack on initialization', () => {
    assert.equal(stack._size, 0);
  });

  describe('#push()', () => {
    it('adds specified item to stack', () => {
      stack.push(1);
      assert.equal(stack._size, 1);
      assert.deepEqual(stack._storage[1], 1);
      stack.push(2);
      assert.equal(stack._size, 2);
      assert.deepEqual(stack._storage[2], 2);
      stack.push(3);
      assert.equal(stack._size, 3);
      assert.deepEqual(stack._storage[3], 3);
    });
  });

  describe('#pop()', () => {
    it('removes the last item added to the stack', () => {
      assert.deepEqual(stack.pop(), 3);
      assert.equal(stack._size, 2);
      assert.deepEqual(stack.pop(), 2);
      assert.equal(stack._size, 1);
    });

    it('does not decrement the size of an empty stack', () => {
      stack.pop();
      assert.equal(stack._size, 0);
      stack.pop();
      assert.equal(stack._size, 0);
      assert.deepEqual(stack.pop(), undefined);
    });
  });
});
