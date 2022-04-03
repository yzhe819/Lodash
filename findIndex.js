// Return the index of the first element that predicate returns truthy instead of the element itself.
const findIndex = (array, predicate) => {
    return array ? array.findIndex(predicate) : undefined;
};
module.exports = findIndex;