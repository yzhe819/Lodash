import differenceBy from '../differenceBy';
it('should accept an `iteratee`', () => {
    expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toStrictEqual([
        { x: 2 },
    ]);
});
it('should provide correct `iteratee` arguments', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([
        1.2,
    ]);
});
