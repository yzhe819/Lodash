import fill from '../fill';
let array = [1, 2, 3];
let falsy = [, null, undefined, false, 0, NaN, ''];
let largeValues = [3, 4, Math.pow(2, 32), Infinity];
let negativeValues = [0, -1, -3, -4, -Infinity];
beforeEach(() => {
    array = [1, 2, 3];
});
it('should use a default `start` of `0` and a default `end` of `length`', () => {
    expect(fill(array, 'a')).toStrictEqual(['a', 'a', 'a']);
});
it('should use `undefined` for `value` if not given', () => {
    expect(fill(array)).toStrictEqual([...Array(3)]);
});
it('should work with a positive `start`', () => {
    expect(fill(array, 'a', 1)).toStrictEqual([1, 'a', 'a']);
});
it('should work with a `start` >= `length`', () => {
    largeValues.forEach(value => {
        expect(fill(array, 'a', value)).toStrictEqual([1, 2, 3]);
    });
});
it('should treat falsy `start` values as `0`', () => {
    falsy.forEach(value => {
        expect(fill(array, 'a', value)).toStrictEqual(['a', 'a', 'a']);
    });
});
it('should work with a negative `start`', () => {
    expect(fill(array, 'a', -1)).toStrictEqual([1, 2, 'a']);
});
it('should work with a negative `start` <= negative `length`', () => {
    negativeValues.forEach(value => {
        expect(fill(array, 'a', value)).toStrictEqual(['a', 'a', 'a']);
    });
});
it('should work with `start` >= `end`', () => {
    let elements = [2, 3];
    elements.forEach(value => {
        expect(fill(array, 'a', value, 2)).toStrictEqual([1, 2, 3]);
    });
});
it('should work with a positive `end`', () => {
    expect(fill(array, 'a', 0, 1)).toStrictEqual(['a', 2, 3]);
});
it('should work with a `end` >= `length`', () => {
    largeValues.forEach(value => {
        expect(fill(array, 'a', 0, value)).toStrictEqual(['a', 'a', 'a']);
    });
});
it('should treat falsy `end` values, except `undefined`, as `0`', () => {
    falsy.forEach(value => {
        array = [1, 2, 3]; // need to re-init after full
        if (value === undefined) {
            expect(fill(array, 'a', 0, value)).toStrictEqual(['a', 'a', 'a']);
        } else {
            expect(fill(array, 'a', 0, value)).toStrictEqual([1, 2, 3]);
        }
    });
});
it('should work with a negative `end`', () => {
    expect(fill(array, 'a', 0, -1)).toStrictEqual(['a', 'a', 3]);
});
it('should work with a negative `end` <= negative `length`', () => {
    let elements = [-3, -4, -Infinity];
    elements.forEach(value => {
        array = [1, 2, 3]; // need to re-init after full
        expect(fill(array, 'a', 0, value)).toStrictEqual([1, 2, 3]);
    });
});
it('should coerce `start` and `end` to integers', () => {
    let positions = [[0.1, 1.6], ['0', 1], [0, '1'], ['1'], [NaN, 1], [1, NaN]];
    let excepts = [
        ['a', 2, 3],
        ['a', 2, 3],
        ['a', 2, 3],
        [1, 'a', 'a'],
        ['a', 2, 3],
        [1, 2, 3],
    ];
    for (let i = 0; i < positions; i++) {
        array = [1, 2, 3]; // need to re-init after full
        expect(fill(array, 'a', ...positions[i])).toStrictEqual(excepts[i]);
    }
});
