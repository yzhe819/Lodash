const pullAll = require('./pullAll');
// Returns the new array of removed elements.
const remove = (array, predicate) => {
    const values = [...array].filter(predicate);
    pullAll(array, values);
    return values;
};

module.exports = remove;
