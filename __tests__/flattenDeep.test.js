import flattenDeep from "../flattenDeep";
it("should flattened array a single level deep", function () {
  let array = [1, [2, [3, [4]], 5]];
  expect(flattenDeep(array)).toStrictEqual([1, 2, 3, 4, 5]);
});
it("should treat sparse arrays as dense", function () {
  let array = [[1, 2, 3], Array(3)];
  expect(flattenDeep(array)).toStrictEqual([
    1,
    2,
    3,
    undefined,
    undefined,
    undefined,
  ]);
});
it("should work with empty arrays", function () {
  let array = [[], [[]], [[], [[[]]]]];
  expect(flattenDeep(array)).toStrictEqual([]);
});
it("should return an empty array for non array-like objects", function () {
  let nonArray = { 0: "a" };
  expect(flattenDeep(nonArray)).toStrictEqual([]);
});
