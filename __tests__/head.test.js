import head from "../head";
let array = [1, 2, 3, 4];

it("should return the first element", function () {
  expect(head(array)).toStrictEqual(1);
});

it("should return `undefined` when querying empty arrays", function () {
  expect(head([])).toStrictEqual(undefined);
});

it("should work as an iteratee for methods like `_.map`", function () {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let except = [1, 4, 7];
  for (let i = 0; i < array.length; i++) {
    expect(head(array[i])).toStrictEqual(except[i]);
  }
});
