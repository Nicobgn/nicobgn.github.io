import type { FunctionalComponent, TextareaHTMLAttributes } from "preact";
import Field from "./Field";
import { cx } from "../../libs/core";

type TextareaProps = Omit<TextareaHTMLAttributes, 'id' | 'name'> & {
  id?: string;
  name: string;
  label: string;
};

const Textarea: FunctionalComponent<TextareaProps> = ({
  id, name, label,
  class: cs, className: cn,
  placeholder = ' ',
  ...rest
}) => {
  id = id ?? name;

  const classes = cx(
    'px-2 py-2 rounded-md',
    'w-full min-w-64 md:min-w-96',
    'peer',
    'bg-gray-950/50',
    cs as string, cn as string,
  );

  return (
    <Field id={id} label={label}>
      <textarea
        id={id}
        name={name}
        class={classes}
        placeholder={placeholder}
        {...rest}
      />
    </Field>
  )
};

export default Textarea;
