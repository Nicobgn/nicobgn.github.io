import type { FunctionalComponent } from "preact";
import { cx } from "../libs/core";
import { Link } from "../components/ui/Link";
import { MESSAGES } from "../libs/i18n";
import { useLang } from "../contexts/lang";
import Sidebar from "../components/Sidebar";
import { useState } from "preact/hooks";

export const Layout: FunctionalComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);  
  
  const { lang, toggle } = useLang();
  
  const layoutClasses = cx(
    'flex flex-col md:flex-row',
    'text-neutral-50',
    'h-dvh',
  );

  const mainLayoutClasses = cx(
    isSidebarOpen ? 'flex-shrink max-h-0': 'flex-1',
    'md:flex-1 md:h-dvh md:max-h-dvh',
    'flex flex-col',
    'bg-linear-to-br from-gray-800 to-gray-950',
  );

  const mainClasses = cx(
    'flex-1',
    'overflow-y-auto',
    'scroll-smooth',
    // 'scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900',
    'scrollbar-dark',
  );

  const langClasses = cx(
    'px-3 py-2 text-sm w-12',
    'rounded border',
    'absolute right-4 md:right-8 top-2',
    'bg-gray-900',
    'hover:bg-neutral-950 z-50',
    'hover:bg-slate-700/80 focus:bg-slate-700/80',
  );

  const msg = MESSAGES[lang].layout;

  return (
    <div class={layoutClasses}>
      <Sidebar
        lang={lang}
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(prev => !prev)}
      />
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
          {/* <ul role={'navigation'} class={'flex flex-1 justify-center gap-8 items-center px-8 py-4'}>
            <NavLink href="#hero">{msg.nav.hero}</NavLink>
            <NavLink href="#tecnologias">{msg.nav.technologies}</NavLink>
            <NavLink href="#proyectos">{msg.nav.projects}</NavLink>
            <NavLink href="#contacto">{msg.nav.contact}</NavLink>
          </ul> */}
        </header>
        <main class={mainClasses}>{children}</main>
        <footer class={'px-4 py-2'}>
          <p>
            &copy; 2026 -{' '}
            <Link href="https://github.com/Nicobgn">Nicolás Barragán</Link>
          </p>
        </footer>
      </div>
    </div>
  )
};
