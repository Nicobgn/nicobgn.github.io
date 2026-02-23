import type { FunctionalComponent } from "preact";
import { cx } from "../libs/core";

export const Layout: FunctionalComponent = ({ children }) => {
  const layoutClasses = cx(
    'flex flex-col md:flex-row',
    'bg-neutral-950 text-neutral-50',
  );

  const mainLayoutClasses = cx(
    ''
  );

  return (
    <div class={layoutClasses}>
      <aside></aside>
      <div class={mainLayoutClasses}>
        <header></header>
        <main class={'overflow-x-scroll'}>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
};
