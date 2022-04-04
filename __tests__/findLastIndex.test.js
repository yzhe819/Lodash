import findLastIndex from "../findLastIndex";
it("should return last index of users whose ago is greater than or equal to 40 ", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
    { user: "patricia", age: 42, active: true },
  ];
  expect(findLastIndex(users, (o) => o.age >= 40)).toStrictEqual(3);
});
