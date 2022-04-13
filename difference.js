// Creates an array of array values not included in the other given arrays.
// The order and references of result values are determined by the first array.
const difference = (array, ...values) => {
    if (!Array.isArray(array)) return [];
    const validValues = [].concat(...values.filter((value) => Array.isArray(value)));
    return array.map(i => i == 0 ? 0 : i).filter((item) => !validValues.includes(item));
};
module.exports = difference;