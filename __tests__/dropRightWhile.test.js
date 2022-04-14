import dropRightWhile from '../dropRightWhile';
let array, objects;
beforeEach(() => {
    array = [1, 2, 3, 4];
    objects = [
        { 'a': 0, 'b': 0 },
        { 'a': 1, 'b': 1 },
        { 'a': 2, 'b': 2 }
    ];
});
it('should drop elements while `predicate` returns truthy', () => {
    expect(dropRightWhile(array, function (n) {
        return n > 2;
    })).toStrictEqual([1, 2]);
});
// it('should provide correct `predicate` arguments', () => {
//     // this test is used to check the running order
//     let args;
//     dropRightWhile(array, () => {
//         args = Array.prototype.slice.call(arguments);
//     });
//     expect(args).toStrictEqual([4, 3, array]);
// });