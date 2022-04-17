import reverse from '../reverse';
it('should reverse `array`', function () {
    const array = [1, 2, 3],
        actual = reverse(array);
    expect(actual).toStrictEqual([3, 2, 1]);
    expect(array).toStrictEqual(actual);
});
