import { assert } from 'chai';

import every from './every';

describe('Arrays', () => {
  describe('every', () => {
    it('returns true when all elements pass the truth test', () => {
      const elements = [2, 4, 6, 8];
      const isEven = x => {
        return x % 2 === 0;
      };

      assert.isTrue(every(elements, isEven), 'Elements are all even');
    });

    it('returns false when one element fails the truth test', () => {
      const elements = [2, 4, 7, 8];
      const isEven = x => {
        return x % 2 === 0;
      };

      assert.isFalse(every(elements, isEven), 'Elements are not all even');
    });
  });
});
