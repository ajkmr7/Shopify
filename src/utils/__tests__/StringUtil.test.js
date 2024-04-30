// Utils
import { capitalizeFirstLetter } from "../StringUtil";

describe("capitalizeFirstLetter", () => {
  it("capitalizes the first letter of a single word string", () => {
    const input = "hello";
    const output = capitalizeFirstLetter(input);
    expect(output).toBe("Hello");
  });

  it("capitalizes the first letter of each word in a multi-word string", () => {
    const input = "hello world";
    const output = capitalizeFirstLetter(input);
    expect(output).toBe("Hello World");
  });

  it("works with numbers", () => {
    const input = "123abc";
    const output = capitalizeFirstLetter(input);
    expect(output).toBe("123abc");
  });
});
