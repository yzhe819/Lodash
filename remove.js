const pullAll = require('./pullAll');

const remove = (array, predicate) => {
    const values = [...array].filter(predicate);
    pullAll(array, values);
    return values;
};

module.exports = remove;
