// Returns the last element of array.
const last = array => {
    return Array.isArray(array) ? array[array.length - 1] : undefined;
};

module.exports = last;
