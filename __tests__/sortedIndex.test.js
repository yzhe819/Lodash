import sortedIndex from '../sortedIndex';
it('should return the insert index', () => {
    const array = [30, 50],
        values = [30, 40, 50],
        expected = [0, 1, 1];
    const actual = values.map(value => sortedIndex(array, value));
    expect(actual).toStrictEqual(expected);
});
it('should work with an array of strings', () => {
    const array = ['a', 'c'],
        values = ['a', 'b', 'c'],
        expected = [0, 1, 1];
    const actual = values.map(value => sortedIndex(array, value));
    expect(actual).toStrictEqual(expected);
});
it('should accept a nullish `array` and a `value`', () => {
    const values = [null, undefined],
        expected = values.map(value => [0, 0, 0]);
    const actual = values.map(array => [
        sortedIndex(array, 1),
        sortedIndex(array, undefined),
        sortedIndex(array, NaN),
    ]);
    expect(actual).toStrictEqual(expected);
});
it('should align with `_.sortBy` for nulls', () => {
    const array = [null, null];
    expect(sortedIndex(array, null)).toStrictEqual(0);
    expect(sortedIndex(array, 1)).toStrictEqual(0);
    expect(sortedIndex(array, 'a')).toStrictEqual(0);
});
