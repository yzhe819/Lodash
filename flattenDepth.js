const flatten = require('./flatten');
// Recursively flatten array up to depth times.
const flattenDepth = (array, depth = 1) => {
    array = flatten(array);
    return depth <= 1 ? array : flattenDepth(array, depth - 1);
};

module.exports = flattenDepth;
