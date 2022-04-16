// Returns the slice of array.
const dropRight = (array, size = 1) => {
    return size < 1 ? array : array.slice(0, -size || array.length);
};
module.exports = dropRight;
