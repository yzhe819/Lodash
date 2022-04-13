import intersectionBy from '../intersectionBy';
it('should accept an `iteratee`', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([2.1]);
    expect(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toStrictEqual([{ 'x': 1 }]);
});
it("should provide correct `iteratee` arguments", () => {
    let args;
    intersectionBy([2.1, 1.2], [2.3, 3.4], function () {
        args || (args = Array.prototype.slice.call(arguments));
    });
    expect(args).toStrictEqual([2.3]);
});
