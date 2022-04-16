import dropRight from '../dropRight';
let array = [1, 2, 3];
it('should drop the last two elements', () => {
    expect(dropRight(array, 2)).toStrictEqual([1]);
});
it('should treat falsey `n` values, except `undefined`, as `0`', () => {
    let falsey = [, null, undefined, false, 0, NaN, ''];
    falsey.forEach(value => {
        if (value === undefined) {
            expect(dropRight(array, value)).toStrictEqual([1, 2]);
        } else {
            expect(dropRight(array, value)).toStrictEqual(array);
        }
    });
});
it('should return all elements when `n` < `1`', () => {
    let elements = [0, -1, -Infinity];
    elements.forEach(value => {
        expect(dropRight(array, value)).toStrictEqual(array);
    });
});
it('should return an empty array when `n` >= `length`', () => {
    let elements = [3, 4, Math.pow(2, 32), Infinity];
    elements.forEach(value => {
        expect(dropRight(array, value)).toStrictEqual([]);
    });
});
it('should coerce `n` to an integer', () => {
    expect(dropRight(array, 1.6)).toStrictEqual([1, 2]);
});
it('should work in a lazy sequence', () => {
    // todo add large array test case
});
