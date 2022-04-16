// Fills elements of array with value from start up to, but not including, end.
const fill = (array, value = undefined, start = 0, end = array.length) => {
    end = end < 0 ? array.length + end : end;
    return start >= end ? array : array.fill(value, start, end || 0);
};
module.exports = fill;
