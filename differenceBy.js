// This method is like difference except that it accepts iteratee
// which is invoked for each element of array and values to generate the criterion by which they're compared.
const differenceBy = (array, ...values) => {
    if (!Array.isArray(array)) return [];
    let iteratee = values.pop();
    const validValues = values.filter((value) => Array.isArray(value));
    let combinedValues = [].concat(...validValues);
    array = array.map((item) => (item == 0 ? 0 : item));
    if (typeof iteratee === "function") {
        combinedValues = combinedValues.map((value) => iteratee(value));
        return array.filter(
            (item) => !combinedValues.map(iteratee).includes(iteratee(item)));
    } else {
        return array.filter(
            (item) => !combinedValues.map((value) => value[iteratee]).includes(item[iteratee]));
    }
};
module.exports = differenceBy;