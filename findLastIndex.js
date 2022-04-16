// Return the index of the last element that predicate returns truthy instead of the element itself.
const findLastIndex = (array, predicate) => {
    const reverseIndex = array.reverse().findIndex(predicate);
    return reverseIndex === -1 ? -1 : array.length - (reverseIndex + 1);
};

module.exports = findLastIndex;
