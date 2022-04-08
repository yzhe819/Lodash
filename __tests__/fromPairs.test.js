import fromPairs from "../fromPairs";
it("should accept a two dimensional array", () => {
  let array = [
      ["a", 1],
      ["b", 2],
    ],
    object = { a: 1, b: 2 };
  expect(fromPairs(array)).toStrictEqual({ a: 1, b: 2 });
});
it("should not support deep paths", () => {
  expect(fromPairs([["a.b", 1]])).toStrictEqual({ "a.b": 1 });
});
