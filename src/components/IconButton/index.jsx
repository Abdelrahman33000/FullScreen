import { useMemo } from "react";

export const IconButton = ({
  children,
  className,
  type = "button",
  onClick = console.log,
  buttonSize = "medium",
  isArrow,
  ...rest
}) => {
  const classNames = useMemo(() => {
    const classes = {
      button: `inline-flex ${
        isArrow ? `` : `items-center`
      } rounded-full text-black hover:bg-gray-200 duration-100 ${
        className ?? ""
      }`,
      icon: "w-5 h-5",
    };

    if (buttonSize === "large") {
      classes.button += " p-2";
      classes.icon = "w-7 h-7";
    } else if (buttonSize === "small") {
      classes.button += " p-1";
    } else {
      classes.button += " p-2";
    }

    return classes;
  }, [className, buttonSize]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames.button}
      {...rest}
    >
      <span aria-hidden="true" className={classNames.icon}>
        {children}
      </span>
    </button>
  );
};

export default IconButton;
