import { forwardRef } from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={clsx(
            "w-full rounded-md border px-3 py-2 text-sm outline-none transition",
            "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300",
            className
          )}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
