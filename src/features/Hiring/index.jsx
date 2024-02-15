import { useTranslation } from "react-i18next";
import { HeroSection } from "../../components";
import { API_SERVICES_URLS } from "../../data";
import { useSWRHook } from "../../hooks";
import { Job } from "./components";
import { useEffect } from "react";

export const HiringWrapper = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data: jobs, mutate } = useSWRHook(API_SERVICES_URLS.GET_ALL_JOBS);

  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <>
      <HeroSection type="job" />
      <div className=" mx-auto max-w-7xl px-2 sm:px-4 md:px-8  pt-10 md:pb-6 ">
        <div className="text-center md:w-[35%] lg:w-[30%] mx-auto">
          <span className="text-primary text-xl font-bold">
            {t("hiring.title")}
          </span>
          <p className="text-black text-[400] text-lg mb-10 mt-5">
            {t("hiring.desc")}
          </p>
        </div>

        {jobs?.data?.map((jobItem) => (
          <Job key={jobItem._id} data={jobItem} />
        ))}
      </div>
    </>
  );
};
export default HiringWrapper;
