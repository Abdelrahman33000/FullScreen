import { useEffect, useState } from "react";
import Button from "../Button";
import { ArrowLongUpIconMini } from "../../lib/@heroicons";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed right-3 bottom-24 md:bottom-28 z-30 sm:right-7 lg:right-10 xl:right-28 ${
        isVisible
          ? "opacity-100 transition-opacity duration-500 ease-in"
          : "opacity-0"
      }`}
    >
      <a href="#heroSection">
        <Button className="rounded-full flex justify-center h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 text-xl items-center !p-0 !m-0">
          <ArrowLongUpIconMini className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </Button>
      </a>
    </div>
  );
};
export default ScrollButton;
