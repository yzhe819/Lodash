import remove from '../remove';
const isEven = n => n % 2 === 0;
it('should modify the array and return removed elements', () => {
    let array = [1, 2, 3, 4],
        actual = remove(array, isEven);
    expect(actual).toStrictEqual([2, 4]);
    expect(array).toStrictEqual([1, 3]);
});
it('should provide correct `predicate` arguments', () => {
    let argsList = [],
        array = [1, 2, 3],
        clone = array.slice();

    remove(array, function (n, index) {
        let args = Array.prototype.slice.call(arguments);
        args[2] = args[2].slice();
        argsList.push(args);
        return isEven(index);
    });
    expect(argsList).toStrictEqual([
        [1, 0, clone],
        [2, 1, clone],
        [3, 2, clone],
    ]);
});

// todo: test with `predicate` which is not a function
// it('should work with `_.matches` shorthands', () => {
//     let objects = [
//         { a: 0, b: 1 },
//         { a: 1, b: 2 },
//     ];
//     remove(objects, { a: 1 });
//     expect(objects).toStrictEqual([{ a: 0, b: 1 }]);
// });

// it('should work with `_.matchesProperty` shorthands', () => {
//     let objects = [
//         { a: 0, b: 1 },
//         { a: 1, b: 2 },
//     ];
//     remove(objects, ['a', 1]);
//     expect(objects).toStrictEqual([{ a: 0, b: 1 }]);
// });

// it('should work with `_.property` shorthands', ()=> {
//     let objects = [{ a: 0 }, { a: 1 }];
//     remove(objects, 'a');
//     assert.deepStrictEqual(objects, [{ a: 0 }]);
// });

it('should preserve holes in arrays', () => {
    let array = [1, 2, 3, 4];
    delete array[1];
    delete array[3];
    remove(array, function (n) {
        return n === 1;
    });
    expect(!('0' in array)).toBe(true);
    expect(!('2' in array)).toBe(true);
});
it('should treat holes as `undefined`', () => {
    let array = [1, 2, 3];
    delete array[1];
    let actual = remove(array, function (n) {
        return n == null;
    });

    expect(actual).toStrictEqual([undefined]);
});
it('should not mutate the array until all elements to remove are determined', () => {
    let array = [1, 2, 3];
    remove(array, function (n, index) {
        return isEven(index);
    });
    expect(array).toStrictEqual([2]);
});
