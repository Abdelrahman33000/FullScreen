import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIconMini } from "../../../lib/@heroicons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HashLink } from "react-router-hash-link";
import { useSWRHook } from "../../../hooks";
import { API_SERVICES_URLS } from "../../../data";
import SwitchLanguage from "../../../components/SwitchLanguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data: services, mutate } = useSWRHook(
    API_SERVICES_URLS.GET_LIST_NAVBAR_SERVICES
  );

  useEffect(() => {
    mutate();
  }, [language]);

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

  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const showNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    setShow(false);

    if (pathname.includes("article")) {
      setShow(true);
    } else {
      window.addEventListener("scroll", showNavbar);
      return () => window.removeEventListener("scroll", showNavbar);
    }
  }, [pathname]);

  return (
    <Disclosure
      as="nav"
      className={`bg-grayDark md:bg-transparent transition ease-in-out delay-150    ${
        show === true ? "!bg-white shadow-sm" : ""
      } fixed top-0 w-full z-10`}
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 md:px-8 ">
            <div className="flex justify-between h-16 ">
              <div className="flex items-center justify-between flex-1 ">
                <div className="flex items-center flex-shrink-0">
                  <NavLink to="/">
                    <img
                      className="w-auto h-12 "
                      src={language == "ar" ? "/logo.svg" : "/logoEn.svg"}
                      alt="Fullscreen"
                    />
                  </NavLink>
                </div>
                <div className="justify-center hidden gap-3 md:flex">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm 2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base  font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("homeItem")}
                  </NavLink>
                  <Menu
                    as="div"
                    className={`${
                      pathname.includes("/services")
                        ? "border-b-2 pb-1 border-primary font-bold  text-sm  px-1 pt-1  text-primary inline-flex items-center"
                        : "border-transparent font-medium"
                    } relative 2xl:text-base inline-flex items-center border-b-2 pb-1  px-1 pt-1 text-sm  text-primary hover:border-primary hover:text-primaryDark transition-all ease-linear`}
                  >
                    <Menu.Button className="flex items-center gap-1 bg-transparent rounded-full text-md focus:outline-none text-primary">
                      {({ open }) => (
                        <>
                          <span className="sr-only">Open user menu</span>
                          <span> {t("servicesItem")}</span>
                          <ChevronDownIconMini
                            className={`${
                              open ? "rotate-180 transform" : ""
                            }   w-4 h-4 -ml-1`}
                          />
                        </>
                      )}
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute top-7 right-0 z-10 mt-2  w-[190px] origin-top-right rounded-[10px] py-4 bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-start">
                        {services?.data?.map((item, index) => {
                          return (
                            <Disclosure
                              key={item._id}
                              defaultOpen={index == 0}
                              as="div"
                            >
                              {({ open }) => (
                                <>
                                  <dt
                                    onClick={closeCurrent}
                                    ref={(el) =>
                                      (AccordionRefs.current[index] = el)
                                    }
                                  >
                                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-bold text-left bg-transparent 2xl:text-base text-primary hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                      <span>{item._id}</span>
                                      <ChevronUpIcon
                                        className={`${
                                          open ? "rotate-180 transform" : ""
                                        } h-4 w-4 text-purple-500`}
                                      />
                                    </Disclosure.Button>
                                  </dt>
                                  <Disclosure.Panel className="font-[500] pb-2 text-sm text-gray-500 2xl:text-base">
                                    {item?.services?.map((service) => (
                                      <Menu.Item key={service?._id}>
                                        {({ active }) => (
                                          <NavLink
                                            className={classNames(
                                              active ? "bg-gray-100" : "",
                                              "block px-4 py-2 text-md text-grayDefault"
                                            )}
                                            to={`/services/${service._id}`}
                                          >
                                            {service.name}
                                          </NavLink>
                                        )}
                                      </Menu.Item>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          );
                        })}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <NavLink
                    to="/packages"
                    className={({ isActive }) =>
                      isActive || pathname.includes("package")
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm 2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base  font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("packagesItem")}
                  </NavLink>

                  <NavLink
                    to="/articles"
                    className={({ isActive }) =>
                      isActive || pathname.includes("article")
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm 2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base  font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("articlesItem")}
                  </NavLink>
                  <NavLink
                    to="/our-works"
                    className={({ isActive }) =>
                      isActive || pathname.includes("our-works")
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm 2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base  font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("worksItem")}
                  </NavLink>

                  <NavLink
                    to="/hiring"
                    className={({ isActive }) =>
                      isActive || pathname.includes("job-description")
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm  2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base   font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("hiringItem")}
                  </NavLink>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "  border-b-2 pb-1 border-primary font-bold  text-sm 2xl:text-base px-1 pt-1  text-primary inline-flex items-center"
                        : "inline-flex items-center pb-1 text-primary border-b-2 text-sm 2xl:text-base  font-medium px-1 pt-1 border-transparent hover:border-primary hover:text-primaryDark transition-all ease-linear"
                    }
                  >
                    {t("contactItem")}
                  </NavLink>
                </div>
         <Link to={"/login"}>
               <button className="mx-1" style={{ border:"1px solid #6e2d82" ,color:"#6e2d82", padding:"5px 20px", borderRadius:"7px" }} >   {t("login")} </button>
         </Link>
                <SwitchLanguage />
              </div>
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-1 text-black rounded-md hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <ResponsiveMenu />
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
