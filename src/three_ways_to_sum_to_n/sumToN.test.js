//const sum_to_n = require("./solution_a");
//const sum_to_n = require("./solution_b");
//const sum_to_n = require("./solution_c");

describe("sum_to_n", () => {
  it("should return 15 when n is 5", () => {
    expect(sum_to_n(5)).toBe(15);
  });

  it("should return 21 when n is 6", () => {
    expect(sum_to_n(6)).toBe(21);
  });

  it("should return 231 when n is 21", () => {
    expect(sum_to_n(21)).toBe(231);
  });
});
