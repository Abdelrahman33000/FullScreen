import { useParams } from "react-router-dom";
import { HeroSection } from "../../components";
import { useSWRHook } from "../../hooks";
import JobTabs from "./components/JobTabs";
import { API_SERVICES_URLS } from "../../data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const JobDescriptionWrapper = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const { id } = useParams();

  const { data: jobDetails, mutate } = useSWRHook(
    API_SERVICES_URLS.GET_JOB_DETAILS(id)
  );
  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <>
      <HeroSection type="job" />
      <div className=" mx-auto max-w-7xl px-2 sm:px-4 md:px-8  pt-10 md:pb-6 ">
        <div className="text-center mb-8">
          <h4 className="text-primary mb-4 font-bold text-xl">
            {jobDetails?.data?.title}{" "}
          </h4>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-2">
              <img src="/dot.svg" alt="dot" />
              <span className="text-black">{jobDetails?.data?.location}</span>
            </div>
            <div className="flex gap-2">
              <img src="/dot.svg" alt="dot" />
              <span className="text-black">{jobDetails?.data?.type}</span>
            </div>
          </div>
        </div>
        <JobTabs description={jobDetails?.data?.description} />
      </div>
    </>
  );
};
export default JobDescriptionWrapper;
