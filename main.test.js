import { describe, expect, test } from "vitest";
import main from "./main";

describe("main", () => {
  test("should return success", () => {
    expect(main(1)).toBe("success");
  });
});
