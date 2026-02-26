import { cx } from "../libs/core";
import { MESSAGES } from "../libs/i18n";
import { useLang } from "../hooks/useLang";

const Technologies = () => {
  const { lang } = useLang();
  const msg = MESSAGES[lang].technologies;

  const sectionClasses = cx(
    "py-24 px-6 md:px-12",
    "flex flex-col gap-8"
  );

  const gridClasses = cx(
    "grid gap-6",
    "md:grid-cols-2 xl:grid-cols-3"
  );

  const cardClasses = cx(
    "rounded border p-5",
    "bg-transparent"
  );

  const titleClasses = cx("text-2xl font-bold");
  const cardTitleClasses = cx("text-lg font-semibold mb-3");
  const listClasses = cx("list-disc pl-5 flex flex-col gap-1 opacity-90");

  return (
    <section id={"tecnologias"} class={sectionClasses}>
      <header class={"flex flex-col gap-2"}>
        <h3 class={titleClasses}>{msg.title}</h3>
        <p class={"opacity-80 max-w-2xl"}>
          {lang === "en"
            ? "A snapshot of the technologies I use most often across backend, frontend, and infrastructure."
            : "Un resumen de las tecnologías que uso con más frecuencia en backend, frontend e infraestructura."}
        </p>
      </header>

      <div class={gridClasses}>
        <div class={cardClasses}>
          <h4 class={cardTitleClasses}>{msg.languages.title}</h4>
          <ul class={listClasses}>
            {msg.languages.items.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div class={cardClasses}>
          <h4 class={cardTitleClasses}>{msg.backend.title}</h4>
          <ul class={listClasses}>
            {msg.backend.items.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div class={cardClasses}>
          <h4 class={cardTitleClasses}>{msg.frontend.title}</h4>
          <ul class={listClasses}>
            {msg.frontend.items.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div class={cardClasses}>
          <h4 class={cardTitleClasses}>{msg.infra.title}</h4>
          <ul class={listClasses}>
            {msg.infra.items.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div class={cardClasses}>
          <h4 class={cardTitleClasses}>{msg.extra.title}</h4>
          <ul class={listClasses}>
            {msg.extra.items.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;