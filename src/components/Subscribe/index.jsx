import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary  ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8  py-14  text-white text-center md:w-[600px]">
        <h2 className="text-2xl font-[700] mb-8">{t("subscribe.title")}</h2>
        <p className="font-[400] text-lg">{t("subscribe.desc")} </p>
        <NavLink to="#" className="block underline mt-10 font-[600]">
          {t("subscribe.linkTitle")}{" "}
        </NavLink>
      </div>
    </div>
  );
};
export default Subscribe;
