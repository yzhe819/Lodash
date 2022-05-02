// Returns the index at which value should be inserted into array.
const sortedIndex = (array, value) => {
    return Array.isArray(array) ? [...array, value].sort().indexOf(value) : 0;
};

module.exports = sortedIndex;
