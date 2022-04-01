// Creates an array of array values not included in the other given arrays.
// The order and references of result values are determined by the first array.
const difference = (array, ...values) => {
    if (Array.isArray(array)) {
        const validValues = values.filter((value) => Array.isArray(value));
        const combinedValues = [].concat(...validValues);
        array = array.map((item) => (item == 0 ? 0 : item));
        return array.filter((item) => !combinedValues.includes(item));
    } else {
        return [];
    }
};
module.exports = difference;