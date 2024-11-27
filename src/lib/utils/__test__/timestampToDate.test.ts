import { describe, expect, it } from "vitest";
import { timestampToDate } from "@utils";

describe("Test timestampToDate util", () => {
  const mockedParam = 1732370391;
  const mockedResult = "Sábado, 23 de Noviembre";

  it("Convert unix time stamp to string date and capitalize first letter of day and month", () => {
    const result = timestampToDate(mockedParam);
    expect(result).toBe(mockedResult);
  });
});
