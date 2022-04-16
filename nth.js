// Returns the nth element of array.
const nth = (array, index = 0) => {
    const length = array.length;
    return Array.isArray(array) && Math.abs(index || 0) < length
        ? array[index >= 0 ? index : length + index]
        : undefined;
};

module.exports = nth;
