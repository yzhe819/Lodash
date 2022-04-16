import difference from '../difference';
it('should return the difference of two arrays', () => {
    expect(difference([2, 1], [2, 3])).toStrictEqual([1]);
});
it('should return the difference of multiple arrays', () => {
    expect(difference([2, 1, 2, 3], [3, 4], [3, 2])).toStrictEqual([1]);
});
it('should return the different object of two arrays', () => {
    // todo add the deep copy check of object
    // expect(difference(
    //     [{ a: 1, b: 2 }, { c: 3, d: 4 }, ], [{ a: 1, b: 2 }])).toStrictEqual([{ c: 3, d: 4 }]);
});
it('should treat `-0` as `0`', () => {
    expect(difference([-0, 1], [1])).toStrictEqual([0]);
});
it('should match `NaN`', () => {
    expect(difference([1, NaN, 3], [NaN, 5, NaN])).toStrictEqual([1, 3]);
});
it('should ignore values that are not array-like', () => {
    expect(difference([1, null, 3], [1, 2, 3], null)).toStrictEqual([null]);
});
