import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { British, Saudi } from "../Svg";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIconMini } from "../../lib/@heroicons";
import Button from "../Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SwitchLanguage() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
  };

  const languages = [
    { label: "AR", value: "ar" },
    { label: "EN", value: "en" },
  ];

  useEffect(() => {
    document.body.lang = language == "ar" ? "ar" : "en";
    document.body.dir = language == "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div className=" flex items-center pr-2 md:static md:inset-auto md:mr-6 md:pr-0">
      <Menu as="div" className="relative ">
        <div>
          <Menu.Button className="flex rounded-full bg-transparent text-md 2xl:text-lg focus:outline-none  items-center gap-1 text-primary">
            {({ open }) => (
              <>
                <span className="sr-only">Open user menu</span>
                {language == "ar" && (
                  <ChevronDownIconMini
                    className={`${
                      open ? "rotate-180 transform" : ""
                    }   w-4 h-4 -ml-1`}
                  />
                )}

                <span>{language == "ar" ? "AR" : "EN"}</span>
                <img
                  className="h-5 w-5 rounded-full 2xl:w-6 2xl:h-6"
                  src="/language.svg"
                  alt=""
                />
                {language == "en" && (
                  <ChevronDownIconMini
                    className={`${
                      open ? "rotate-180 transform" : ""
                    }   w-4 h-4 -mr-1`}
                  />
                )}
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2  w-[80px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
            {languages.map((language) => (
              <Menu.Item key={language.value}>
                {({ active }) => (
                  <Button
                    className={classNames(
                      active ? "!bg-gray-100" : "",
                      "block px-4 py-2 text-md bg-transparent !text-gray-700 rounded-none"
                    )}
                    onClick={() => handleLanguageChange(language.value)}
                  >
                    <span className="flex gap-2 items-center text-[16px]">
                      {language.label}
                      {language.value === "ar" ? (
                        <Saudi className="h-6 w-6" />
                      ) : (
                        <British className="h-4 w-4" />
                      )}
                    </span>
                  </Button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default SwitchLanguage;
