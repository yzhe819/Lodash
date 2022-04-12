// returns the new array of intersecting values
const intersection = (...values) => {
    // Array.from is used to handle arguments and other non array values
    // treat values that are not arrays or `arguments` objects as empty
    values = values.map(value => value ? Array.from(value) : []);
    let res = values[0];
    values.forEach((array) => {
        res = res.filter((x) => array.includes(x));
    });
    return [...(new Set(res))];
};

module.exports = intersection;
