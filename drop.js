const drop = (array, size = 1) => {
    return size < 1 ? array : array.slice(size, array.length);
};
export default drop;