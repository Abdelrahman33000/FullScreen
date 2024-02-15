import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Job = ({ data }) => {
  const { t } = useTranslation();
  let department = "";
  if (data.category == "قسم البرمجة" || data.category == "Programming") {
    department = t("hiring.card.programmingCategory");
  } else if (data.category == "قسم التصميم") {
    department = "تصميم";
  } else if (data.category == "قسم التسويق") {
    department = "تسويق";
  }

  return (
    <div className="my-5 bg-secondary flex flex-col md:flex-row p-4 rounded-xl">
      <div className="w-full md:w-[25%]">
        <span className="text-primary text-lg font-medium">
          {data.category}
        </span>
        <p className="text-black text-[400]   mt-3">{t("hiring.card.desc")}</p>
      </div>
      <div className="p-4 w-full md:w-[75%]">
        <div className=" bg-white rounded-xl border border-black p-5">
          <div className="flex gap-4 mb-4">
            <span className="text-black text-lg font-medium">{data.title}</span>
            <span className="text-primary flex gap-3 rounded-2xl bg-[#d9d9d9] px-5">
              <img src="/dot.svg" alt="dot" />
              <span>{department}</span>
            </span>
          </div>
          <p className="text-black font-[400] mb-7">
            {t("hiring.card.weSearch")} {data.title} {t("hiring.card.for")}
          </p>
          <div className="flex gap-20 mb-8">
            <div className="flex gap-2 text-black font-[400]">
              <img src="/clock.svg" alt="time" className="h-5 w-5" />
              <span className="text-[11px] sm:text-sm">{data.type}</span>
            </div>
            <div className="flex gap-2 text-black font-[400]">
              <img src="/location.svg" alt="location" className="h-5 w-5" />
              <span className="text-[11px] sm:text-sm">{data.location}</span>
            </div>
          </div>
          <NavLink
            to={`/job-description/${data._id}`}
            className="w-fit float-end"
          >
            <span className="flex gap-3 items-center text-black text-xl text-medium">
              <img src="/apply.svg" alt="apply" className="w-4 h-4" />
              <span>{t("hiring.card.applyNow")}</span>
            </span>
          </NavLink>
          <div className="clear-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Job;
