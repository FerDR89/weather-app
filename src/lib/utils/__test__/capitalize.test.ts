import { describe, expect, it } from "vitest";
import { capitalize } from "@utils";

describe("Test capitalize util", () => {
  const mockedParam = "fernando";
  const mockedResult = "Fernando";

  it("Capitalize first letter", () => {
    const result = capitalize(mockedParam);
    expect(result).toBe(mockedResult);
  });
});
