import chunk from "../chunk.js";
it("split array into chunks of size two", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
        ["a", "b"],
        ["c", "d"],
    ]);
});
it("split array into chunks of size three", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toStrictEqual([
        ["a", "b", "c"],
        ["d"],
    ]);
});
it("split array into chunks of size zero", () => {
    expect(chunk(["a", "b", "c", "d"], 0)).toStrictEqual([]);
});
it("split array into chunks of negative size", () => {
    expect(chunk(["a", "b", "c", "d"], -1)).toStrictEqual([]);
});