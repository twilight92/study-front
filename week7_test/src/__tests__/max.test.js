const max = require("../max");

test("max test", () => {
  expect(max(1, 5)).toBe(5);
  expect(max(1, 6)).toBe(6);
});
