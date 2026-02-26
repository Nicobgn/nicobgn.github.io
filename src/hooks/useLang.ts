import { useEffect, useMemo, useState } from "preact/hooks";
import { DEFAULT_LANG, type Lang } from "../libs/i18n";

const STORAGE_KEY = "portfolio_lang";

export function useLang() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Lang | null);
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    // set <html lang="..."> for accessibility/SEO
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useMemo(
    () => () => setLang((prev) => (prev === "en" ? "es" : "en")),
    []
  );

  return { lang, setLang, toggle };
}