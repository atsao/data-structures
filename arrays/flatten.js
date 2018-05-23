// Recursive solution
function flatten(array) {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    }

    return acc.concat(item);
  }, []);
}

function flattenIterative(array) {
  const result = [];

  while (array.length) {
    const next = array.shift();

    if (Array.isArray(next)) {
      array = next.concat(array);
    } else {
      result.push(next);
    }
  }

  return result;
}

export default flatten;
export { flattenIterative };
