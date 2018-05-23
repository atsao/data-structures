/**
 * Test whether every item in the array pass the test from the provided function
 * @param  {array} elements
 * @param  {function} test
 * @return {boolean}
 */
const every = (elements, test) => {
  for (let i = 0; i < elements.length; i++) {
    if (!test(elements[i])) {
      return false;
    }
  }

  return true;
};

export default every;
