import { isZero } from "../src/isZero";

describe("isZero", () => {
  test("isZeroに0を渡したらtrueが返ってくる", () => {
    const result = isZero(0);
    expect(result).toBe(true);
  });
  test("isZeroに1を渡したらfalseが返ってくる", () => {
    const result = isZero(1);
    expect(result).toBe(false);
  });
});
