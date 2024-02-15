import { forwardRef } from "react";

export const TextArea = forwardRef(
  (
    {
      placeholder,
      id,
      rows = 4,
      labelClassName,
      className,
      error = false,
      withoutHelperText = false,
      helperText,
      ...rest
    },
    ref
  ) => {
    const classNames = {
      label: `block mb-1  ${labelClassName ?? ""}  `,
      textArea: `block p-2.5 w-full text-sm text-black outline-primary	 focus:outline-2 rounded-md placeholder:text-primary placeholder:text-lg placeholder:font-medium ${className}`,
      helperText: "inline-flex min-h-[20px] text-xs mt-1 text-red ",
      error: "!border-red focus:!border-red !text-red",
    };

    return (
      <div className="relative mt-3 ">
        <div className="relative flex-1">
          <textarea
            id={`area-${id}`}
            rows={rows}
            className={`${classNames.textArea} ${
              error ? classNames.error : ""
            }`}
            ref={ref}
            {...rest}
            placeholder={placeholder}
          />

          {!withoutHelperText && error && (
            <p className={classNames.helperText}>{helperText}</p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
