import type { FormattersInitializer } from "typesafe-i18n";
import type { Locales, Formatters } from "./i18n-types";

const numberFormatterCache = new Map<string, Intl.NumberFormat>();

const getNumberFormatter = (locale: Locales, options: Intl.NumberFormatOptions) => {
  const key = `${locale}-${JSON.stringify(options)}`;
  if (!numberFormatterCache.has(key)) {
    numberFormatterCache.set(key, new Intl.NumberFormat(locale, options));
  }
  return numberFormatterCache.get(key);
};

export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
  const formatters: Formatters = {
    currency: (value: number, currency = "INR") =>
      getNumberFormatter(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 2
      }).format(value ?? 0),
    number: (value: number, maximumFractionDigits = 2) =>
      getNumberFormatter(locale, { maximumFractionDigits }).format(value ?? 0),
    percent: (value: number, maximumFractionDigits = 2) =>
      getNumberFormatter(locale, {
        style: "percent",
        maximumFractionDigits
      }).format(value ?? 0)
  };

  return formatters;
};
