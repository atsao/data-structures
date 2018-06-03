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

  it('contains an items instance property', () => {
    assert.isDefined(stack.items);
  });

  it('creates an empty items list on initialization', () => {
    assert.equal(stack.items.length, 0);
  });

  describe('push', () => {
    it('adds specified item to stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      assert.equal(stack.items.length, 3);
      assert.deepEqual(stack.items, [1, 2, 3]);
    });
  });

  describe('pop', () => {
    it('removes the last item added to the stack', () => {
      assert.deepEqual(stack.pop(), 3);
      assert.equal(stack.items.length, 2);
      assert.deepEqual(stack.pop(), 2);
      assert.equal(stack.items.length, 1);
    });

    it('does not decrement the size of an empty stack', () => {
      stack.pop();
      assert.equal(stack.items.length, 0);
      stack.pop();
      assert.equal(stack.items.length, 0);
      assert.deepEqual(stack.pop(), undefined);
    });
  });
});
