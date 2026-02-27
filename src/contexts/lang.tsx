import { createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

export type Lang = "en" | "es";

export const DEFAULT_LANG: Lang = "en";

type LangCtx = {
  lang: Lang;
  toggle: () => void;
};

const STORAGE_KEY = "portfolio_lang";

const LangContext = createContext<LangCtx | null>(null);

export const LangProvider = ({ children }: { children: preact.ComponentChildren }) => {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Lang | null);
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggle = () => setLang((prev) => (prev === "en" ? 'es' : 'en'));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    // set <html lang="..."> for accessibility/SEO
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, toggle };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
