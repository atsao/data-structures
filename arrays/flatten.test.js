import { assert } from 'chai';

import flatten, { flattenIterative } from './flatten';

describe('Arrays', () => {
  describe('flatten', () => {
    const input = [1, [2], [[3, 4], 5]];

    describe('Nested', () => {
      it('should flatten an array containing nested arrays', () => {
        const expected = [1, 2, 3, 4, 5];

        assert.deepEqual(flatten(input), expected);
      });
    });
  });

  describe('flatten (iterative)', () => {
    const input = [1, [2], [[3, 4], 5]];

    describe('Nested', () => {
      it('should iteratively flatten an array containing nested arrays', () => {
        const expected = [1, 2, 3, 4, 5];

        assert.deepEqual(flattenIterative(input), expected);
      });
    });
  });
});
