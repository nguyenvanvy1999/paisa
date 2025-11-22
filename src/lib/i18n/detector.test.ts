import { describe, expect, test } from "bun:test";
import { normalizeLocaleCode, resolvePreferredLocale } from "./detector";

describe("normalizeLocaleCode", () => {
  test("matches exact locale code", () => {
    expect(normalizeLocaleCode("en")).toBe("en");
    expect(normalizeLocaleCode("vi")).toBe("vi");
  });

  test("matches extended locale with region", () => {
    expect(normalizeLocaleCode("en-US")).toBe("en");
    expect(normalizeLocaleCode("VI-vn")).toBe("vi");
  });

  test("returns null for unsupported locale", () => {
    expect(normalizeLocaleCode("fr")).toBeNull();
    expect(normalizeLocaleCode(undefined)).toBeNull();
  });
});

describe("resolvePreferredLocale", () => {
  test("returns first supported locale", () => {
    expect(resolvePreferredLocale(["fr-FR", "vi", "en"])).toBe("vi");
  });

  test("falls back to base locale when none supported", () => {
    expect(resolvePreferredLocale(["jp", "fr"])).toBe("en");
  });

  test("ignores empty candidates", () => {
    expect(resolvePreferredLocale([null, undefined, ""])).toBe("en");
  });
});
