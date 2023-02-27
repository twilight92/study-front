const max = require("../max")

test("max test", () => {
  expect(max(1, 5)).toBe(5)
  expect(max(8, -1)).toBe(8)
  expect(max(1, -15)).toBe(1)
})

// console.log(max(1,5))
// console.log(max(8,5))
// console.log(max(-8,-5))
// console.log(max(-8,5))
// console.log(max(8,8))
