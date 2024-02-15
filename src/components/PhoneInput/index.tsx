import React, { useMemo } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import usePhoneInputMutation from "./usePhoneInputMutation";

export const PhoneInput = ({
  label,
  id,
  helperText,
  className,
  inputClassName,
  inputSize = "medium",
  error = false,
  withoutHelperText = false,
  country = "sa",
  preferredCountries = [],
  enableSearch = true,
  inputProps,
  labelClassName,
  ...rest
}) => {
  usePhoneInputMutation();
  const classNames = useMemo(() => {
    const classes = {
      inputContainer: `mb-3 relative text-gray-dark ${className ?? ""}`,
      label: `block mb-1 ${labelClassName ?? ""}`,
      input: `!block !w-full !h-auto !px-4 !pl-16 !border !border-gray focus:!ring-0 focus:!border-blue !rounded-md !bg-secondary ${
        inputClassName || ""
      }`,
      //  [&_.arrow]:!border-none
      button:
        "!bg-transparent !border-none [&>div]:border-r [&>div]:border-gray [&>div:hover]:!bg-transparent [&_.selected-flag.open]:!bg-transparent",
      helperText: "inline-flex min-h-[20px] text-xs mt-1",
    };

    if (inputSize === "large") {
      classes.input += " py-4 !text-lg";
      classes.inputContainer += " text-lg";
    } else if (inputSize === "small") {
      classes.input += " py-2 !text-sm";
      classes.inputContainer += " text-sm";
    } else {
      classes.input += " py-2 !text-base";
      classes.inputContainer += " text-base";
    }

    if (error) {
      classes.input += " !border-red focus:!border-red";
    }

    return classes;
  }, [className, inputClassName, inputSize, error]);

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      <div dir="ltr">
        <ReactPhoneInput
          inputProps={{
            id: id,
            ...inputProps,
          }}
          specialLabel=""
          inputClass={classNames.input}
          buttonClass={classNames.button}
          country={country}
          preferredCountries={["sa", "il", ...preferredCountries]}
          excludeCountries={["il"]}
          masks={{ sa: "... ... ...", il: "... ... ..." }}
          enableSearch={enableSearch}
          {...rest}
        />
      </div>

      {!withoutHelperText && error && (
        <p className={classNames.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default PhoneInput;
