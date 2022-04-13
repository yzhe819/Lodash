// This method is like difference except that it accepts iteratee
// which is invoked for each element of array and values to generate the criterion by which they're compared.
const differenceBy = (array, ...values) => {
    if (!Array.isArray(array)) return [];
    const validValues = [].concat(...values.filter((value) => Array.isArray(value)));
    let iteratee = values.pop();
    if (typeof iteratee == 'string') {
        const prop = iteratee;
        iteratee = ((item) => item[prop]);
    }
    return array.map(i => i == 0 ? 0 : i).filter(
        (item) => !validValues.map(iteratee).includes(iteratee(item)));
};
module.exports = differenceBy;