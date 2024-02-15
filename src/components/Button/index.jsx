import { forwardRef, useMemo } from "react";
import ButtonLoading from "./ButtonLoading";

export const Button = forwardRef(
  (
    {
      children,
      className,
      type = "button",
      buttonSize = "medium",
      fullWidth = false,
      loading = false,
      buttonLoadingProps,
      ...rest
    },
    ref
  ) => {
    const classNames = useMemo(() => {
      let buttonClassName = `block bg-primary hover:bg-opacity-95 transition-colors text-white rounded-[10px] disabled:opacity-50 disabled:hover:bg-blue-light ${
        className ?? ""
      }`;

      if (fullWidth) {
        buttonClassName += " w-full";
      }

      if (buttonSize === "large") {
        buttonClassName += " py-4 px-16  text-lg";
      } else if (buttonSize === "small") {
        buttonClassName += " py-2 px-10 text-sm";
      } else {
        buttonClassName += " py-2  px-20 text-base";
      }

      return { buttonClassName };
    }, [buttonSize, className, fullWidth]);

    return (
      <button
        className={`${classNames.buttonClassName} ${
          loading ? " opacity-50" : " "
        }`}
        type={type}
        ref={ref}
        {...rest}
      >
        {loading ? <ButtonLoading {...buttonLoadingProps} /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
