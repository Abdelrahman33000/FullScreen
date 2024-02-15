import { forwardRef } from "react";
import usePasswordInput from "./usePasswordInput";

export const FloatingInput = forwardRef(
  (
    {
      label,
      id,
      helperText,
      className,
      startIcon,
      endIcon,
      inputSize = "medium",
      type = "text",
      error = false,
      withoutHelperText = false,
      labelClassName,
      handleEndIcon = () => {},
      endIconClassName,

      ...rest
    },
    ref
  ) => {
    const MATERIAL_INPUT_CLASSES = {
      input:
        " block w-full border-gray focus:ring-0 focus:border-primary   text-black block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ",

      label:
        "block text-primary absolute font-medium text-lg   duration-100 transform -translate-y-4 scale-75 top-1   peer-focus:text-primary    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4  !cursor-text peer-focus:!cursor-default   ",
    };

    const { passwordInputType, passwordInputIcon } =
      usePasswordInput(inputSize);
    const classes = {
      inputContainer: `flex-1 mb-3 relative text-gray-dark  ${className ?? ""}`,
      label: ` ${labelClassName ?? ""}${MATERIAL_INPUT_CLASSES.label}  `,
      input: `${MATERIAL_INPUT_CLASSES.input}  `,
      icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
      startIcon: "right-4",
      endIcon: `left-4 ${endIconClassName ?? ""}`,
      helperText:
        "cursor-context-menu inline-flex min-h-[20px] text-xs mt-1 text-red ",
      error: "!border-red focus:border-red !text-red ",
    };

    if (inputSize === "large") {
      classes.input += " !py-4 !px-5";
      classes.inputContainer += " text-lg";
    } else if (inputSize === "small") {
      classes.input += " !py-2 !px-3 !text-sm";
      classes.inputContainer += " !text-sm";
    } else {
      classes.input += " !py-3 !px-4";
      classes.inputContainer += " text-base";
    }
    if (error) {
      classes.input += " !border-red focus:border-red !text-red ";
    }
    const inputType = type === "password" ? passwordInputType : type;
    const inputEndIcon = type === "password" ? passwordInputIcon : endIcon;

    return (
      <div className={classes.inputContainer}>
        <div className="relative flex-1 ">
          {startIcon && (
            <span
              className={`absolute text-gray-400 select-none top-1/2 -translate-y-2/4 start-4`}
            >
              {startIcon}
            </span>
          )}
          <div className="relative ">
            <input
              type={inputType}
              id={id}
              className={`${classes.input} ${className}  `}
              placeholder=""
              ref={ref}
              {...rest}
            />
            <label
              htmlFor={id}
              className={`${classes.label} ${className} ${
                error ? classes.error : ""
              }`}
            >
              <span className="px-2"> {label}</span>
            </label>
          </div>
          {inputEndIcon && (
            <span
              className={`${classes.icon} ${classes.endIcon}  `}
              onClick={() => handleEndIcon()}
            >
              {inputEndIcon}
            </span>
          )}
        </div>
        {!withoutHelperText && error && (
          <p className={classes.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
export default FloatingInput;
