import indexOf from "../indexOf";
let array = [1, 1, 2, 3, 4];

it("should return the index of first element", function () {
  expect(indexOf(array, 1)).toStrictEqual(0);
});

it("should return -1 for no exist value", function () {
  expect(indexOf(array, 5)).toStrictEqual(-1);
});
