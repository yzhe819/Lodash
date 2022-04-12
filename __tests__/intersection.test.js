import intersection from '../intersection';
import toArgs from '../utils';
it("should return the intersection of two arrays", () => {
    expect(intersection([2, 1], [2, 3])).toStrictEqual([2]);
});
it("should return the intersection of multiple arrays", () => {
    expect(intersection([2, 1, 2, 3], [3, 4], [3, 2])).toStrictEqual([3]);
});
it("should return an array of unique values", () => {
    expect(intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1])).toStrictEqual([1, 2]);
});
it("should work with a single array", () => {
    expect(intersection([1, 1, 3, 2, 2])).toStrictEqual([1, 3, 2]);
});
it('should work with `arguments` objects', () => {
    expect(intersection([0, 1, null, 3], toArgs([1, 2, 3]))).toStrictEqual([1, 3]);
    expect(intersection(toArgs([1, 2, 3]), [0, 1, null, 3])).toStrictEqual([1, 3]);
});
it("should treat `-0` as `0`", () => {
    expect(intersection([-0, 0])).toStrictEqual([0]);
});
it("should treat values that are not arrays or `arguments` objects as empty", () => {
    let array = [0, 1, null, 3];
    expect(intersection(array, 3, { '0': 1 }, null)).toStrictEqual([]);
    expect(intersection(null, array, null, [2, 3])).toStrictEqual([]);
    expect(intersection(array, null, toArgs([1, 2, 3]), null)).toStrictEqual([]);
});
