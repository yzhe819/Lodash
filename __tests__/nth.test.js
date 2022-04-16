import nth from '../nth';
let array,
    falsey = [, null, undefined, false, 0, NaN, ''];
beforeEach(() => {
    array = ['a', 'b', 'c', 'd'];
});
it('should get the nth element of `array`', () => {
    let actual = array.map((value, index) => nth(array, index));
    expect(actual).toStrictEqual(array);
});
it('should work with a negative `n`', () => {
    let actual = array.map((value, index) =>
        nth(array, array.length - index - 1)
    );
    expect(actual).toStrictEqual(array.reverse());
});
it('should coerce `n` to an integer', () => {
    // array map will skip the empty item, but join will not
    // use ... to spread the array for checking empty item
    let actual = [...falsey].map(n => (n ? nth(array, n) : nth(array)));
    let expected = Array(falsey.length).fill('a');
    expect(actual).toStrictEqual(expected);
});
it('should return `undefined` for empty arrays', () => {
    let values = [null, undefined, []];
    let actual = values.map(n => nth(values, 1));
    expect(actual).toStrictEqual([undefined, undefined, undefined]);
});
it('should return `undefined` for non-indexes', () => {
    let values = [Infinity, array.length];
    array[-1] = 3;
    let actual = values.map(n => nth(array, n));
    expect(actual).toStrictEqual([undefined, undefined]);
});
