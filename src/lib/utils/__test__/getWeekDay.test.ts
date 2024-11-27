import { describe, expect, it } from "vitest";
import { getWeekDay } from "@utils";

describe("Test getWeekDay util", () => {
  const mockedParam = 1732370391;
  const mockedResult = "Sábado";

  it("Capitalize first letter", () => {
    const result = getWeekDay(mockedParam);
    expect(result).toBe(mockedResult);
  });
});
