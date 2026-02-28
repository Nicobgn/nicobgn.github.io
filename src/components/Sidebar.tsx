import { cx } from "../libs/core";
import { MESSAGES } from "../libs/i18n";
import { NavLink } from "./ui/Link";

type SidebaProps = {
  lang: 'en' | 'es';
  isOpen?: boolean;
  toggle?: () => void;
};

const Sidebar = ({ lang, isOpen, toggle }: SidebaProps) => {
  const msg = MESSAGES[lang].layout;
  
  const classes = cx(
    'bg-linear-to-bl from-gray-800 to-gray-950',
    'md:flex flex-col',
    'md:w-36',
    isOpen
      ? 'h-full flex-1 md:flex-none py-12'
      : 'h-0 md:h-auto',
  );

  return (
    <>
      <button
        type="button"
        class="absolute md:hidden top-2 left-4 md:left-8 w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={toggle}
      >
        {isOpen ? 'X' : 'O'}
      </button>
      <aside class={classes}>
        <ul role={'navigation'} class={'flex flex-1 flex-col justify-center gap-4 items-left px-8 py-4'}>
          <li><NavLink href="#hero">{msg.nav.hero}</NavLink></li>
          <li><NavLink href="#tecnologias">{msg.nav.technologies}</NavLink></li>
          <li><NavLink href="#proyectos">{msg.nav.projects}</NavLink></li>
          <li><NavLink href="#contacto">{msg.nav.contact}</NavLink></li>
        </ul>
      </aside>
    </>
  )
};

export default Sidebar;
