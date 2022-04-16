import lastIndexOf from '../lastIndexOf';
it('should return the index of last element', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2)).toEqual(3);
});
it('search from the `fromIndex`', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toEqual(1);
});
