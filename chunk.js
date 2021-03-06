// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
const chunk = (array, size = 1) => {
    if (size <= 0) return [];
    return [...Array(Math.ceil(array.length / size))].map((_, i) =>
        array.slice(i * size, i * size + size)
    );
};
module.exports = chunk;
