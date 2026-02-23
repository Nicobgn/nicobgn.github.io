import type { FunctionalComponent } from "preact";
import { cx } from "../libs/core";

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
    'relative'
  );

  const labelClasses = cx(
    'absolute',
    'top-1 left-2',
    'peer-focus:-top-3 peer-not-placeholder-shown:-top-3',
    'duration-300 transition-all'
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
