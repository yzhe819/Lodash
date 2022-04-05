// Flattens array a single level deep.
const flatten = (array) => {
  const res = Array.isArray(array) ? [].concat(...array) : [];
  return Array.from(res);
};

// use build in flat method
const buildInFlatten = (array) => {
  return Array.isArray(array) ? array.flat() : [];
};
module.exports = flatten;
