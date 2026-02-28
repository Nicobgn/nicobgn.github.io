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

  const buttonClasses = cx(
    'px-3 py-2 text-sm w-12',
    'rounded-md border',
    'fixed md:hidden left-4 md:left-8 top-2',
    'bg-gray-800',
    'text-center',
    'hover:bg-gray-700 focus:bg-gray-700',
    'z-50',
  );

  return (
    <>
      <button
        type="button"
        class={buttonClasses}
        aria-label={isOpen ? msg.closeNav : msg.openNav}
        onClick={toggle}
        tabIndex={-1}
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
