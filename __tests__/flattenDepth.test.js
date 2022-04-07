import flattenDepth from "../flattenDepth";
let array = [1, [2, [3, [4]], 5]];
beforeEach(() => {
  array = [1, [2, [3, [4]], 5]];
});
it("should use a default `depth` of `1`", function () {
  expect(flattenDepth(array)).toStrictEqual([1, 2, [3, [4]], 5]);
});
it("should treat a `depth` of < `1` as a shallow clone", function () {
  [-1, 0].forEach((depth) => {
    expect(flattenDepth(array, depth)).toStrictEqual([1, 2, [3, [4]], 5]);
  });
});
it("should coerce `depth` to an integer", function () {
  expect(flattenDepth(array, 2)).toStrictEqual([1, 2, 3, [4], 5]);
});
