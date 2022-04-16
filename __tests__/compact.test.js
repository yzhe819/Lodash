import compact from '../compact';
it('remove all the undefined from array', () => {
    expect(compact(['a', 'b', 'c', undefined, undefined])).toStrictEqual([
        'a',
        'b',
        'c',
    ]);
});
it('remove all the false from array', () => {
    expect(compact(['a', 'b', 'c', false, false])).toStrictEqual([
        'a',
        'b',
        'c',
    ]);
});
it('remove all the zero items from array', () => {
    expect(compact(['a', 'b', 'c', 0, 0])).toStrictEqual(['a', 'b', 'c']);
});
it('remove all the empty string from array', () => {
    expect(compact(['a', 'b', 'c', '', ''])).toStrictEqual(['a', 'b', 'c']);
});
it('remove all the null from array', () => {
    expect(compact(['a', 'b', 'c', null, null])).toStrictEqual(['a', 'b', 'c']);
});
it('remove all the NaN from array', () => {
    expect(compact(['a', 'b', 'c', NaN, NaN])).toStrictEqual(['a', 'b', 'c']);
});
it('overall testing', () => {
    expect(compact([undefined, false, 0, NaN, null, ''])).toStrictEqual([]);
});
it('empty input', () => {
    expect(compact([])).toStrictEqual([]);
});
it('invalid input', () => {
    expect(compact(null)).toStrictEqual([]);
});
