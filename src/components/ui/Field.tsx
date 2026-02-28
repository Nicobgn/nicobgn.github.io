import type { FunctionalComponent } from "preact";
import { cx } from "../../libs/core";

type FieldProps = {
  label: string;
  id: string;
  hint?: string;
  error?: string;
};

const Field: FunctionalComponent<FieldProps> = ({
  children,
  label, id,
  hint, error,
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
    'peer-focus:bg-gray-950/90 peer-not-placeholder-shown:bg-gray-950/90',
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
        {hint && (
          <span class={"block text-xs opacity-80"}>{hint}</span>
        )}
        {error && (
          <span class={"block text-xs text-red-500"}>{error}</span>
        )}
      </label>
    </div>
  )
};

export default Field;
