import { formatDate, formatDateTime } from "../../src/utils/dateTime";

describe("dateTime", () => {
  const date = new Date("2026-06-07T14:05:00.000Z");

  describe("formatDate", () => {
    it("formats a date without its time", () => {
      expect(formatDate(date)).toBe("Jun 7, 2026");
    });

    it("accepts an ISO date string", () => {
      expect(formatDate("2026-06-07T14:05:00.000Z")).toBe("Jun 7, 2026");
    });
  });

  describe("formatDateTime", () => {
    it("formats a date with its time", () => {
      expect(formatDateTime(date)).toBe("Jun 7, 2026, 14:05");
    });

    it("accepts an ISO date string", () => {
      expect(formatDateTime("2026-06-07T14:05:00.000Z")).toBe(
        "Jun 7, 2026, 14:05",
      );
    });
  });
});
