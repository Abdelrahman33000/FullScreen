import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDownIconMini } from "../../../../lib/@heroicons";
import { Fragment, useRef, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import { useTranslation } from "react-i18next";

const ResponsiveMenu = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const { data: services } = useSWRHook(
    API_SERVICES_URLS.GET_LIST_NAVBAR_SERVICES
  );

  const AccordionRefs = useRef([]);

  const [currentAccordion, setCurrentAccordion] = useState(0);

  function closeCurrent(e) {
    const button = e.target.closest("button");
    const buttonParent = button.parentElement.parentElement;
    const parent = buttonParent.parentElement;
    const index = Array.prototype.indexOf.call(parent.children, buttonParent);
    for (let i = 0; i < AccordionRefs.current.length; i++) {
      if (
        AccordionRefs.current[i].querySelector("button") &&
        AccordionRefs.current[i]
          .querySelector("button")
          .getAttribute("aria-expanded") === "true" &&
        currentAccordion !== index
      ) {
        AccordionRefs.current[i].querySelector("button").click();
      }
    }
    setCurrentAccordion(index);
  }

  return (
    <Disclosure.Panel className="md:hidden  ">
      <div className="space-y-1  max-h-screen overflow-auto  pb-4 pt-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("homeItem")}
        </NavLink>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  pathname === "/services"
                    ? " flex w-full  justify-between border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
                    : "flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-bold text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
                }  `}
              >
                <span> {t("servicesItem")}</span>
                <ChevronDownIconMini
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2  pb-2 text-sm text-gray-500">
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div>
                    {services?.data?.map((item, index) => {
                      return (
                        <Disclosure
                          key={item._id}
                          defaultOpen={index == 0}
                          as="div"
                          className="pt-2"
                        >
                          {({ open }) => (
                            <>
                              <dt
                                onClick={closeCurrent}
                                ref={(el) =>
                                  (AccordionRefs.current[index] = el)
                                }
                              >
                                <Disclosure.Button className="flex w-full font-bold justify-between   bg-transparent px-4 py-2 text-left text-sm  text-primary hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <span>{item._id}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-4 w-4 text-purple-500`}
                                  />
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel className="font-[500] pb-2 text-sm text-gray-500">
                                {item?.services?.map((service) => (
                                  <NavLink
                                    key={service?._id}
                                    to={`/services/${service._id}`}
                                    className="block px-4 py-2 text-md text-grayDefault hover:bg-gray-100 font-medium"
                                  >
                                    {service.name}{" "}
                                  </NavLink>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      );
                    })}
                  </div>
                </Transition>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <NavLink
          to="/packages"
          className={({ isActive }) =>
            isActive || pathname.includes("package")
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("packagesItem")}
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive || pathname.includes("article")
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("articlesItem")}
        </NavLink>

        <NavLink
          to="/our-works"
          className={({ isActive }) =>
            isActive || pathname.includes("our-works")
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("worksItem")}
        </NavLink>

        <NavLink
          to="/hiring"
          className={({ isActive }) =>
            isActive || pathname.includes("job-description")
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("hiringItem")}
        </NavLink>

        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? " block border-l-4 border-primary bg-secondary    py-2 pl-3 pr-4 text-base font-medium text-primary"
              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-secondary hover:text-primary"
          }
        >
          {t("contactItem")}
        </NavLink>
      </div>
    </Disclosure.Panel>
  );
};
export default ResponsiveMenu;
