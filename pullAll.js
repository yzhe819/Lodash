// Removes all given values from array
const pullAll = (array, values) => {
    for (let i = 0; i < array.length; i++) {
        values.includes(array[i]) && array.splice(i--, 1);
    }
    // use ... to handle holes in array
    return [...array];
};

module.exports = pullAll;
