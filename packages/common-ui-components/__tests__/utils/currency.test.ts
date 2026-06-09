import { formatCurrency } from "@sellify/common-ui-components/utils/currency";

describe("formatCurrency", () => {
  it("formats a value as US dollars", () => {
    expect(formatCurrency(123.45)).toBe("$123.45");
  });

  it("always displays two fraction digits", () => {
    expect(formatCurrency(42)).toBe("$42.00");
  });

  it("groups thousands", () => {
    expect(formatCurrency(1234567.89)).toBe("$1,234,567.89");
  });

  it("rounds additional fraction digits", () => {
    expect(formatCurrency(12.345)).toBe("$12.35");
  });

  it("formats zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("formats negative values", () => {
    expect(formatCurrency(-123.45)).toBe("-$123.45");
  });
});
