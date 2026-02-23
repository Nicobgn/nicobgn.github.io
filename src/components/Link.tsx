import type { AnchorHTMLAttributes, FunctionalComponent } from "preact";
import { cx } from "../libs/core";

type Link = Omit<AnchorHTMLAttributes, 'href'> & {
  href: string;
};

export const Link: FunctionalComponent<Link> = ({
  children,
  class: cs, className: cn,
  href, ...rest
}) => {
  const classes = cx(
    'hover:font-bold',
    'visited:text-slate-100',
    cs as string, cn as string,
  );
  
  return (
    <a class={classes} href={href} {...rest}>
      {children}
    </a>
  )
};

type NavLink = Link & {
  label?: string;
};

export const NavLink: FunctionalComponent<NavLink> = ({
  label, children,
  class: cs, className: cn,
  ...rest
}) => {
  const classes = cx(
    cs as string, cn as string,
  );

  return (
    <Link class={classes} {...rest}>
      {children}
      {label}
    </Link>
  );
};
