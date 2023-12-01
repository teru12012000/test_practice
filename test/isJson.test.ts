import { isJson } from "../src/isJson";

describe("isJson", () => {
  test("isJsonにオブジェクトの文字列を渡したらtrueになるか", () => {
    const result = isJson('{"test":"test"}');
    expect(result).toBe(true);
  });
  test("isJsonに配列の文字列を渡したらtrueになるか", () => {
    const result = isJson('["test"]');
    expect(result).toBe(true);
  });
  test("isJsonにただの文字列を渡したらtrueになるか", () => {
    const result = isJson("test");
    expect(result).toBe(false);
  });
});
