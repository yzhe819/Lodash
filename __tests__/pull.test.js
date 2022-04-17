import pull from '../pull';
it('should modify and return the array', () => {
    let array = [1, 2, 3];
    let actual = pull(array, [1, 3]);
    expect(actual).toStrictEqual([2]);
    expect(array).toStrictEqual([2]);
});
it('should preserve holes in arrays', () => {
    let array = [1, 2, 3, 4];
    delete array[1];
    delete array[3];

    let actual = pull(array, [1]);
    expect(!('0' in array)).toBe(true);
    expect(!('2' in array)).toBe(true);
});
it('should treat holes as `undefined`', () => {
    let array = [1, 2, 3];
    delete array[1];
    let actual = pull(array, [1, 3]);
    expect(actual).toStrictEqual([undefined]);
});
it('should match `NaN`', () => {
    let actual = pull([1, NaN, 3, NaN], [NaN]);
    expect(actual).toStrictEqual([1, 3]);
});
