import type { FunctionalComponent } from "preact";
import { cx } from "../libs/core";
import { Link } from "../components/ui/Link";
import { MESSAGES } from "../libs/i18n";
import { useLang } from "../contexts/lang";

export const Layout: FunctionalComponent = ({ children }) => {
  const { lang, toggle } = useLang();
  
  const layoutClasses = cx(
    'flex flex-col md:flex-row',
    // 'bg-neutral-950',
    'text-neutral-50',
    'h-dvh',
    // 'bg-linear-to-br from-gray-800 to-gray-950',
  );

  const mainLayoutClasses = cx(
    'flex-1 md:h-dvh',
    'flex flex-col',
    'bg-linear-to-br from-gray-800 to-gray-950',
  );

  const mainClasses = cx(
    'flex-1',
    'overflow-y-auto',
  );

  const langClasses = cx(
    'px-3 py-2 text-sm w-12',
    'rounded border',
    'absolute right-8 top-2',
    'bg-gray-900',
    'hover:bg-neutral-950 z-50',
    'hover:bg-slate-700/80 focus:bg-slate-700/80',
  );

  const msg = MESSAGES[lang].layout;

  return (
    <div class={layoutClasses}>
      {/* <aside></aside> */}
      <button
        type="button"
        class={langClasses}
        onClick={toggle}
        aria-label={`${msg.langLabel}: ${lang === "en" ? "English" : "Español"}`}
        title={msg.langLabel}
        tabIndex={-1}
      >
        {lang === "en" ? "EN" : "ES"}
      </button>
      <div class={mainLayoutClasses}>
        <header class='hidden md:flex justify-center items-center'>
          <ul role={'navigation'}>
            <li></li>
          </ul>
        </header>
        <main class={mainClasses}>{children}</main>
        <footer>
          <p>
            &copy; 2026 -{' '}
            <Link href="https://nicobgn.github.io">Nicolás Barragán</Link>
          </p>
        </footer>
        {/* <div class={'absolute top-0 left-0 w-dvw h-dvh bg-linear-to-br from-gray-800 to-gray-950 -z-50'}/> */}
      </div>
    </div>
  )
};
