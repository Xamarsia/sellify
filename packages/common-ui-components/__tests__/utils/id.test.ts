import { formatID } from "../../src/utils/id";

describe("formatID", () => {
  it("formats a numeric identifier with a hash prefix", () => {
    expect(formatID(4564564)).toBe("#4564564");
  });

  it("formats a string identifier with a hash prefix", () => {
    expect(formatID("00123")).toBe("#00123");
  });
});
