import { useEffect, useMemo, useState } from "preact/hooks";
import { cx } from "../libs/core";
import { MESSAGES } from "../libs/i18n";
import { useLang } from "../hooks/useLang";

export const Hero = () => {
  const { lang } = useLang();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const phrases = useMemo(() => MESSAGES[lang].hero.phrases, [lang]);

  useEffect(() => {
    // reset index when language changes (optional but nice)
    setCurrentIndex(0);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 6000);

    return () => clearInterval(id);
  }, [phrases.length]);

  const sectionClasses = cx("min-h-dvh md:min-h-200");

  const msg = MESSAGES[lang].hero;

  return (
    <section id={"hero"} class={sectionClasses}>
      <article class={"flex flex-col gap-4"}>
        <div class={"flex items-start justify-between gap-4"}>
          <div>
            <h1 class={"text-3xl font-bold"}>{msg.name}</h1>
            <h2 class={"text-xl opacity-80"}>{msg.tagline}</h2>
          </div>
        </div>

        <div class={"font-mono text-sm opacity-90"}>
          {phrases[currentIndex]}
        </div>

        <div class={"max-w-2xl flex flex-col gap-2"}>
          <p>{msg.p1}</p>
          <p>{msg.p2}</p>
        </div>

        <div class={"flex gap-3 mt-2"}>
          <a class={"px-4 py-2 rounded border"} href="#proyectos">
            {msg.ctas.projects}
          </a>
          <a class={"px-4 py-2 rounded border"} href="#contacto">
            {msg.ctas.contact}
          </a>
        </div>
      </article>
    </section>
  );
};