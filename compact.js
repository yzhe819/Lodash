// Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.
const compact = array => {
    return array ? array.filter(item => !!item) : [];
};
module.exports = compact;
