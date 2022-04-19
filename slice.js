// Creates a slice of array from start up to, but not including, end.
const slice = (array, start = 0, end = array.length) => {
    return array.slice(start, end);
};

module.exports = slice;
