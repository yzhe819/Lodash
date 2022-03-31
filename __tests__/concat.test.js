import concat from "../concat.js";
it("should shallow clone `array`", () => {
    expect(concat([1, 2, 3])).toStrictEqual([1, 2, 3]);
});
it("should concat arrays and values", () => {
    expect(concat([1], 2, [3], [
        [4]
    ])).toStrictEqual([1, 2, 3, [4]]);
});
it("should cast non-array `array` values to arrays", () => {
    expect(concat([, null, undefined, false, true, 1, NaN, "a"], 2, [3])).toStrictEqual([, null, undefined, false, true, 1, NaN, "a", 2, 3]);
});
it("should treat sparse arrays as dense", () => {
    let expected = [];
    expected.length = 2;
    expect(concat(Array(1), Array(1))).toStrictEqual(expected);
});