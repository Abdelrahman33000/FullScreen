import { useState } from "react";

export const useToggle = (defaultValue = false) => {
  let [isOpen, setIsOpen] = useState(defaultValue);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }
  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return { isOpen, close, open, toggle };
};
export default useToggle;
