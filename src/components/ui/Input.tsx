import type { FunctionalComponent, InputHTMLAttributes } from "preact";
import Field from "./Field";
import { cx } from "../../libs/core";

type InputProps = Omit<InputHTMLAttributes, 'id' | 'name'> & {
  id?: string;
  name: string;
  label: string;
};

const Input: FunctionalComponent<InputProps> = ({
  id, name, label, type,
  class: cs, className: cn,
  placeholder = ' ',
  ...rest
}) => {
  id = id ?? name;

  const classes = cx(
    'px-2 py-2 rounded-md',
    'peer',
    'w-full min-w-64 md:min-w-96',
    'bg-gray-950/50',
    cs as string, cn as string,
  );

  return (
    <Field id={id} label={label}>
      <input
        id={id}
        name={name}
        type={type ?? 'text'}
        class={classes}
        placeholder={placeholder}
        {...rest}
      />
    </Field>
  )
};

export default Input;
