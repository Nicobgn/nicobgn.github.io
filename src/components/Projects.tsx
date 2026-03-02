import { useLang } from "../contexts/lang";
import { cx } from "../libs/core";
import { MESSAGES } from "../libs/i18n";
import { Link } from "./ui/Link";

const Projects = () => {
  const { lang } = useLang();
  const msg = MESSAGES[lang].projects;

  const sectionClasses = cx("py-24 px-6 md:px-12", "flex flex-col gap-6");
  const gridClasses = cx("grid gap-6", "md:grid-cols-2");
  const cardClasses = cx("rounded border p-5", "flex flex-col gap-3");
  const chipsWrap = cx("flex flex-wrap gap-2", 'mt-auto self-end ml-auto');
  const chip = cx("text-xs px-2 py-1 rounded border opacity-90");
  const ul = cx("list-disc pl-5 flex flex-col gap-1 opacity-90");

  return (
    <section id={"proyectos"} class={sectionClasses}>
      <header class={"flex flex-col gap-2"}>
        <h3 class={"text-2xl font-bold"}>{msg.title}</h3>
        <p class={"opacity-80 max-w-2xl"}>{msg.subtitle}</p>
        <p class={"italic font-light text-sm opacity-80"}>{msg.note}</p>
      </header>

      <div class={gridClasses}>
        {msg.items.map((p, i) => (
          <article key={`${p.title}-${i}`} class={cardClasses}>
            <div class={"flex items-start justify-between gap-4"}>
              <h4 class={"text-lg font-semibold"}>{p.title}</h4>
              <span class={"text-xs opacity-70"}>{p.status}</span>
            </div>

            <p class={"opacity-90"}>{p.description}</p>

            <ul class={ul}>
              {p.highlights.map((h, idx) => (
                <li key={`${p.title}-h-${idx}`}>{h}</li>
              ))}
            </ul>

            <div class={'flex justify-between items-center mt-auto'}>
              {
                "links" in p && p.links && (
                <ul>
                  { p.links.windows && (
                    <li>
                      <Link href={p.links.windows.href}>{p.links.windows.label}</Link>
                    </li>
                  ) }
                  { p.links.deb && (
                    <li>
                      <Link href={p.links.deb.href}>{p.links.deb.label}</Link>
                    </li>
                  ) }
                  { p.links.repo && (
                    <li>
                      <Link
                        href={p.links.repo.href}
                        target={'_blank'}
                      >
                        {p.links.repo.label}
                      </Link>
                    </li>
                  ) }
                </ul>
              )
              }
              
              <div class={chipsWrap}>
                {p.stack.map((s, idx) => (
                  <span key={`${p.title}-s-${idx}`} class={chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div class={"flex gap-3 mt-2"}>
        <a class={"px-4 py-2 rounded border"} href="#contacto">
          {msg.cta.contact}
        </a>
        <a class={"px-4 py-2 rounded border"} href="#contacto">
          {msg.cta.requestDemo}
        </a>
      </div>
    </section>
  );
};

export default Projects;