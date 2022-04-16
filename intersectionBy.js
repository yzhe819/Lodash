// Returns the new array of intersecting values.
const intersectionBy = (array, ...values) => {
    let iteratee = values.pop();
    if (typeof iteratee === 'string') {
        const prop = iteratee;
        iteratee = item => item[prop];
    }
    return array.filter(a =>
        values.every(list => list.find(b => iteratee(b) === iteratee(a)))
    );
};

module.exports = intersectionBy;
