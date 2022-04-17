// Removes all given values from array
const pull = (array, ...values) => {
    values = values.flat(Infinity);
    for (let i = 0; i < array.length; i++) {
        values.includes(array[i]) && array.splice(i--, 1);
    }
    // use ... to handle holes in array
    return [...array];
};

module.exports = pull;
