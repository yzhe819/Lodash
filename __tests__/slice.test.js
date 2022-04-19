import slice from '../slice';
let array = [1, 2, 3];
const falsy = [, null, undefined, false, 0, NaN, ''];
beforeEach(() => {
    array = [1, 2, 3];
});
it('should use a default `start` of `0` and a default `end` of `length`', () => {
    var actual = slice(array);
    expect(actual).toStrictEqual(array);
});
it('should work with a positive `start`', () => {
    expect(slice(array, 1)).toStrictEqual([2, 3]);
    expect(slice(array, 1, 3)).toStrictEqual([2, 3]);
});
it('should work with a `start` >= `length`', () => {
    [3, 4, Math.pow(2, 32), Infinity].forEach(start => {
        expect(slice(array, start)).toStrictEqual([]);
    });
});
it('should treat falsy `start` values as `0`', () => {
    for (const start of falsy) {
        expect(slice(array, start)).toStrictEqual(array);
    }
});
it('should work with a negative `start`', () => {
    expect(slice(array, -1)).toStrictEqual([3]);
});
it('should work with a negative `start` <= negative `length`', () => {
    [-3, -4, -Infinity].forEach(start => {
        expect(slice(array, start)).toStrictEqual(array);
    });
});
it('should work with `start` >= `end`', () => {
    [2, 3].forEach(start => {
        expect(slice(array, start, 2)).toStrictEqual([]);
    });
});
it('should work with a positive `end`', () => {
    expect(slice(array, 0, 1)).toStrictEqual([1]);
});
it('should work with a `end` >= `length`', () => {
    [3, 4, Math.pow(2, 32), Infinity].forEach(end => {
        expect(slice(array, 0, end)).toStrictEqual(array);
    });
});
it('should treat falsy `end` values, except `undefined`, as `0`', () => {
    for (let i = 0; i < falsy.length; i++) {
        const expected = falsy[i] === undefined ? array : [];
        const actual = i ? slice(array, 0, falsy[i]) : slice(array, 0);
        expect(actual).toStrictEqual(expected);
    }
});
it('should work with a negative `end`', () => {
    expect(slice(array, 0, -1)).toStrictEqual([1, 2]);
});
it('should work with a negative `end` <= negative `length`', () => {
    [-3, -4, -Infinity].forEach(end => {
        expect(slice(array, 0, end)).toStrictEqual([]);
    });
});
it('should coerce `start` and `end` to integers', () => {
    const positions = [
        [0.1, 1.6],
        ['0', 1],
        [0, '1'],
        ['1'],
        [NaN, 1],
        [1, NaN],
    ];
    const actual = positions.map(pos => slice(array, ...pos));
    expect(actual).toStrictEqual([[1], [1], [1], [2, 3], [1], []]);
});
