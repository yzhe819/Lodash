import initial from "../initial";
it("should exclude last element", function () {
  expect(initial([1, 2, 3])).toStrictEqual([1, 2]);
});
it("should return an empty when querying empty arrays", function () {
  expect(initial([])).toStrictEqual([]);
});
it("should work as an iteratee for methods like `_.map`", function () {
  const actual = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ].map((value) => initial(value));
  expect(actual).toStrictEqual([
    [1, 2],
    [4, 5],
    [7, 8],
  ]);
});
