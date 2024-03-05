import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <footer className="bg-white text-center   lg:text-right pt-10 md:pt-16 border-t-[1.5px] border-gray-200   ">
        <div className="mx-auto max-w-7xl px-2 md:px-3 lg:px-0 pb-12">
          <div className="mx-6 py-10  text-start  ">
            <div className="grid-1 grid  md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="">
                <h4 className="mb-4  text-2xl flex       uppercase  justify-start font-bold text-primary">
                  {t("footer.aboutSection.title")}
                </h4>
                <p className="text-black font-[400]">
                  {t("footer.aboutSection.desc")}
                </p>
              </div>

              <div className="text-black">
                <h4 className="mb-4  text-2xl flex items-center    uppercase  justify-start font-bold text-primary">
                  {t("footer.contactSection.title")}
                </h4>
                <h6 className="mb-7 flex text-md    font-[400]  justify-start">
                  {t("footer.contactSection.location")}
                </h6>
                <p className="flex gap-4 items-center mb-4">
                  <img src="/phone.svg" alt="phone" />
                  <span>966114090010</span>
                </p>
                <p className="flex gap-4 items-center mb-4">
                  <img src="/mail.svg" alt="mail" />
                  <span>
                    <a href="mailto:info@fullscreem.sa">info@fullscreem.sa</a>
                  </span>
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=966114090010"
                  target="_blank"
                  aria-label="Chat on WhatsApp"
                  className="flex gap-4 items-center mb-4"
                >
                  <img src="/whatsup.svg" alt="whatsup" />
                  <span>+966 5307 005 02</span>
                </a>
              </div>

              <div className="">
                <h4 className="mb-6  text-2xl flex items-center  uppercase justify-start font-bold text-primary">
                  {t("footer.contactsLinks.title")}
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/fullscreensa_/"
                    target="_blank"
                  >
                    <img
                      src="/instagram.svg"
                      alt="instagram"
                      className="w-9 h-9"
                    />
                  </a>
                  <a
                    href="https://youtu.be/VflBoTUNxAM?si=ve0K6ApdNg7iTRqb"
                    target="_blank"
                  >
                    <img src="/youtube.svg" alt="youtube" className="w-9 h-9" />
                  </a>
                  <a href="https://twitter.com/FullScreensa_" target="_blank">
                    <img src="/twitter.svg" alt="twitter" className="w-9 h-9" />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src="/facebook.svg"
                      alt="facebook"
                      className="w-9 h-9"
                    />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <NavLink to="/">{t("homeItem")}</NavLink>
                </h4>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <HashLink to="/services/برمجة#1">
                    {t("servicesItem")}
                  </HashLink>
                </h4>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <NavLink to="/articles"> {t("articlesItem")}</NavLink>
                </h4>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <HashLink to="/#projects"> {t("worksItem")}</HashLink>
                </h4>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <NavLink to="/hiring"> {t("hiringItem")}</NavLink>
                </h4>
                <h4 className="mb-5  text-xl flex items-center    uppercase justify-start font-bold text-primary hover:text-opacity-80 transition ease-linear delay-100">
                  <NavLink to="/contact-us"> {t("contactItem")} </NavLink>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary p-4 text-center  text-white font-[600] ">
          <span>Copyright © </span>
          <a href="https://fullscreen.sa">Fullscreen</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
