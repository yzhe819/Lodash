import drop from '../drop';
let array = [1, 2, 3];
it('should drop the first two elements', () => {
    expect(drop(array, 2)).toStrictEqual([3]);
});
it('should treat falsy `n` values, except `undefined`, as `0`', () => {
    let falsy = [, null, undefined, false, 0, NaN, ''];
    falsy.forEach(value => {
        if (value === undefined) {
            expect(drop(array, value)).toStrictEqual([2, 3]);
        } else {
            expect(drop(array, value)).toStrictEqual(array);
        }
    });
});
it('should return all elements when `n` < `1`', () => {
    let elements = [0, -1, -Infinity];
    elements.forEach(value => {
        expect(drop(array, value)).toStrictEqual(array);
    });
});
it('should return an empty array when `n` >= `length`', () => {
    let elements = [3, 4, Math.pow(2, 32), Infinity];
    elements.forEach(value => {
        expect(drop(array, value)).toStrictEqual([]);
    });
});
it('should coerce `n` to an integer', () => {
    expect(drop(array, 1.6)).toStrictEqual([2, 3]);
});
it('should work in a lazy sequence', () => {
    // todo add large array test case
});
