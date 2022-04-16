// Removes all given values from array
const pull = (array, ...values) => {
    values = values.flat(Infinity);
    // use concat and ... to handle holes in array
    return [].concat(...array).filter(value => !values.includes(value));
};

module.exports = pull;
