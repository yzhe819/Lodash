const toArgs = array => {
    return function () {
        return arguments;
    }.apply(undefined, array);
};

module.exports = toArgs;
