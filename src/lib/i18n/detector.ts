import type { Locales } from "./i18n-types";
import { baseLocale, locales } from "./i18n-util";

export const normalizeLocaleCode = (value?: string | null): Locales | null => {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return null;
  return (
    locales.find((locale) => normalized === locale || normalized.startsWith(`${locale}-`)) ?? null
  );
};

export const resolvePreferredLocale = (
  candidates: Array<string | null | undefined>
): Locales => {
  for (const candidate of candidates) {
    const normalized = normalizeLocaleCode(candidate);
    if (normalized) {
      return normalized;
    }
  }
  return baseLocale;
};

