import type { FunctionalComponent } from "preact";
import { cx } from "../../libs/core";

type FieldProps = {
  label: string;
  id: string;
};

const Field: FunctionalComponent<FieldProps> = ({
  children,
  label,
  id,
}) => {
  const fieldClasses = cx(
    'relative',
    'mb-4',
  );

  const labelClasses = cx(
    'absolute rounded-lg',
    'duration-300 transition-all',
    'top-2 left-2',
    'peer-focus:-top-3 peer-not-placeholder-shown:-top-3',
    'peer-focus:bg-neutral-900 peer-not-placeholder-shown:bg-neutral-900',
    'peer-focus:px-1 peer-not-placeholder-shown:px-1',
    'peer-focus:left-1 peer-not-placeholder-shown:left-1',
    'peer-focus:text-sm peer-not-placeholder-shown:text-sm',
  );

  return (
    <div class={fieldClasses}>
      {children}
      <label
        htmlFor={id}
        class={labelClasses}
      >
        {label}
      </label>
    </div>
  )
};

export default Field;
