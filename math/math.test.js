const { success, fail, repair } = require("./math.js");

// describe("math.js,", () => {
//   describe("add", () => {
//     // 1 test case
//     test("adds two numbers", () => {
//       // Arrange (setup)
//       const expected = 4;

//       // Act (run System-Under-Test)
//       const actual = math.add(2, 2);

//       // assert
//       expect(actual).toBe(expected); // 1 assertion using .toBe() matcher
//     });

//     it("should throw an error when passed strings", () => {
//       expect(add(3, "4")).toBeNull();
//     });
//   });

//   describe("multiply", () => {
//     it("multiplies two numbers", () => {
//       expect(multiply(3, 4)).toBe(12);
//     });
//   });
// });