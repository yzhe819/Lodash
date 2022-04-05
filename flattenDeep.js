// using stack to flatten array
const flattenDeep = (array) => {
  if (!Array.isArray(array)) return [];
  const stack = [...array];
  const result = [];
  while (stack.length > 0) {
    const tem = stack.pop();
    if (Array.isArray(tem)) {
      stack.push(...tem);
    } else {
      result.push(tem);
    }
  }
  return result.reverse();
};

// use build in flat method
const buildInFlattenDeep = (array) => {
  return Array.isArray(array) ? array.flat(Infinity) : [];
};

module.exports = flattenDeep;
