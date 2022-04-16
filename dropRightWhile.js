// Todo (WIP)
const dropRightWhile = (array, predicate) => {
    let index = array.length,
        length = array.length;
    while (index-- && predicate(array[index], index, array)) {}
    return array.slice(array, index + 1, length);
};

module.exports = dropRightWhile;
