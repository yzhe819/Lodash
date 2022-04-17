import pullAll from '../pullAll';
it('should work with the same value for `array` and `values`', () => {
    let array = [{ a: 1 }, { b: 2 }];
    expect(pullAll(array, array)).toStrictEqual([]);
});
