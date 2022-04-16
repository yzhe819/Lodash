// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
const compact = array => {
    return array ? array.filter(item => !!item) : [];
};
module.exports = compact;
