import indexOf from "../indexOf";
let array = [1, 1, 2, 3, 4];
it("should return the index of first element", () => {
  expect(indexOf(array, 1)).toStrictEqual(0);
});
