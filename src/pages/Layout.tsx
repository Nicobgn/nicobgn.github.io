import type { FunctionalComponent } from "preact";
import { cx } from "../libs/core";
import { Link } from "../components/Link";

export const Layout: FunctionalComponent = ({ children }) => {
  const layoutClasses = cx(
    'flex flex-col md:flex-row',
    'bg-neutral-950 text-neutral-50',
    'h-dvh'
  );

  const mainLayoutClasses = cx(
    'flex-1 md:h-dvh',
    'flex flex-col',
  );

  const mainClasses = cx(
    'flex flex-col flex-1',
    'overflow-y-auto',
  );

  return (
    <div class={layoutClasses}>
      <aside></aside>
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
      </div>
    </div>
  )
};
