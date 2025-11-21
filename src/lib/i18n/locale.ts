import en from "./en";
import type { Locales } from "./i18n-types";
import { baseLocale, locales as supportedLocales, loadedLocales } from "./i18n-util";
import { loadFormatters, loadLocaleAsync } from "./i18n-util.async";
import { setLocale } from "./i18n-svelte";
import { normalizeLocaleCode, resolvePreferredLocale } from "./detector";

const STORAGE_KEY = "paisa.locale";
const QUERY_PARAM = "lang";
const LOCALE_LABELS: Record<Locales, string> = {
  en: "English",
  vi: "Tiếng Việt"
};

type MaybeString = string | null | undefined;

const hasWindow = typeof window !== "undefined";
const hasNavigator = typeof navigator !== "undefined";
const hasDocument = typeof document !== "undefined";

loadedLocales[baseLocale] = en;
loadFormatters(baseLocale);

let currentLocale: Locales = baseLocale;
let initializationPromise: Promise<Locales> | null = null;

const updateDocumentLang = (locale: Locales) => {
  if (!hasDocument) return;
  document.documentElement?.setAttribute("lang", locale);
};

const persistLocale = (locale: Locales) => {
  if (hasWindow && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch (error) {
      console.warn("Unable to persist locale", error);
    }
  }
  updateDocumentLang(locale);
};

const getQueryLocale = (): MaybeString => {
  if (!hasWindow) return null;
  try {
    return new URL(window.location.href).searchParams.get(QUERY_PARAM);
  } catch {
    return null;
  }
};

const getStoredLocale = (): MaybeString => {
  if (!hasWindow || !window.localStorage) return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const getNavigatorLocales = (): string[] => {
  if (!hasNavigator) return [];
  const languages = navigator.languages ?? [];
  const fallback = navigator.language ? [navigator.language] : [];
  return [...languages, ...fallback];
};

const ensureDictionary = async (locale: Locales) => {
  if (locale === baseLocale) return;
  if (!loadedLocales[locale]) {
    await loadLocaleAsync(locale);
  }
};

const applyLocale = async (locale: Locales): Promise<Locales> => {
  await ensureDictionary(locale);
  if (currentLocale !== locale) {
    setLocale(locale);
    currentLocale = locale;
  }
  persistLocale(locale);
  return locale;
};

export const detectClientLocale = (): Locales => {
  return resolvePreferredLocale([getQueryLocale(), getStoredLocale(), ...getNavigatorLocales()]);
};

export const initClientLocale = async (): Promise<Locales> => {
  if (initializationPromise) return initializationPromise;
  initializationPromise = applyLocale(detectClientLocale());
  return initializationPromise;
};

export const changeLocale = async (locale: Locales): Promise<Locales> => applyLocale(locale);

export const getActiveLocale = (): Locales => currentLocale;

export const getLocaleOptions = () =>
  supportedLocales.map((code) => ({
    code,
    label: LOCALE_LABELS[code] ?? code
  }));

export const LOCALE_STORAGE_KEY = STORAGE_KEY;
export const LOCALE_QUERY_PARAM = QUERY_PARAM;
export const localeLabels = LOCALE_LABELS;

setLocale(baseLocale);
updateDocumentLang(baseLocale);

