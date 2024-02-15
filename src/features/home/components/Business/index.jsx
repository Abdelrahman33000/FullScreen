import Slider from "react-slick";
import { sliderBusinessSettings } from "../../../../data/sliderSettingsData";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../utils/SliderButtons/Bottom";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import { Article, Coding, MobileCoding } from "../../../../components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Business = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data, isLoading, mutate } = useSWRHook(
    API_SERVICES_URLS.GET_ALL_PROJECTS
  );

  const [projectData, setProjectData] = useState([]);

  const sliderSettings = {
    ...sliderBusinessSettings,
    nextArrow: (
      <SampleNextArrow containerClassName="md:[&>.slick-next]:rtl:start-[23%] md:[&>.slick-next]:ltr:start-[80%]  [&>.slick-next]:md:ltr:top-[90%] [&>.slick-next]:lg:top-[90%]" />
    ),
    prevArrow: (
      <SamplePrevArrow containerClassName="md:[&>.slick-prev]:rtl:!start-[18%] md:[&>.slick-prev]:ltr:start-[75%]  [&>.slick-prev]:md:ltr:top-[90%] [&>.slick-prev]:lg:top-[90%]" />
    ),
  };

  useEffect(() => {
    if (data?.data) {
      setProjectData(data?.data?.find((item) => item?._id == "web"));
    }
  }, [isLoading]);

  useEffect(() => {
    mutate().then((data) => {
      if (data?.status == "success") {
        setProjectData(data?.data?.find((item) => item?._id == "web"));
      }
    });
  }, [language]);

  const handleProjects = (type) => {
    let dataProject = data?.data?.find((item) => item?._id == type);
    if (dataProject == undefined) {
      const dataProject = data?.data?.find((item) => item?._id == "web");
      setProjectData(dataProject);
    } else {
      setProjectData(dataProject);
    }
  };

  return (
    <div
      className="  bg-white pt-[50px] pb-[80px]  sm:pb-[80px] "
      id="projects"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-4 md:px-8">
        <span className=" text-primary font-bold text-xl block mb-2">
          {t("fifthSectionTitle")}
        </span>

        <Slider {...sliderSettings}>
          {projectData?.projects?.map((project) => (
            <div
              key={project._id}
              className="!flex  !flex-col sm:!flex-row !justify-between gap-5 "
            >
              <div
                dir={language == "ar" ? "rtl" : "ltr"}
                className="rtl:order-2 ltr:order-1 flex flex-col gap-8 md:gap-32 w-full sm:w-[35%] md:w-[55%]    mb-5 text-center  "
              >
                <p className="mt-1 sm:mt-5 text-justify max-w-lg">
                  {project?.description}
                </p>

                <div className=" w-full   lg:w-[55%] grid grid-cols-3 gap-4   mb-5 rtl:text-end ltr:text-start  ">
                  <div
                    onClick={() => handleProjects("web")}
                    className="flex  justify-center  !cursor-pointer items-center sm:justify-normal sm:items-start flex-col gap-1"
                  >
                    <span
                      className={`w-16 h-16 flex justify-center items-center text-black hover:text-white bg-secondary rounded-[5px] hover:!bg-primary ${
                        projectData?._id == "web"
                          ? "!bg-primary text-white"
                          : ""
                      }`}
                    >
                      <Coding className="w-10 h-10" />
                    </span>
                    <span className="text-[11px] sm:text-sm text-black">
                      {t("works.firstCategoryTitle")}
                    </span>
                  </div>
                  <div
                    onClick={() => handleProjects("mobile")}
                    className="flex flex-col gap-1  justify-center !cursor-pointer items-center sm:justify-normal sm:items-start "
                  >
                    <span
                      className={`w-16 h-16 flex justify-center items-center text-black hover:text-white bg-secondary rounded-[5px] hover:!bg-primary ${
                        projectData?._id == "mobile"
                          ? "!bg-primary text-white"
                          : ""
                      }`}
                    >
                      <MobileCoding className="w-10 h-10" />
                    </span>
                    <span className="text-[11px] sm:text-sm text-black">
                      {t("works.secCategoryTitle")}
                    </span>
                  </div>
                  <div
                    onClick={() => handleProjects("content_creation")}
                    className="flex flex-col gap-1 justify-center !cursor-pointer  items-center sm:justify-normal sm:items-start  "
                  >
                    <span
                      className={`w-16 h-16 flex justify-center items-center text-black hover:text-white bg-secondary rounded-[5px] hover:!bg-primary ${
                        projectData?._id == "content_creation"
                          ? "!bg-primary text-white"
                          : ""
                      }`}
                    >
                      <Article className="w-10 h-10" />
                    </span>
                    <span className="text-[11px] sm:text-sm text-black">
                      {t("works.thirdCategoryTitle")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rtl:order-1 ltr:order-2 w-full   sm:w-[55%] md:w-[45%]">
                <div className="  rounded-lg">
                  <a href={project?.link} target="_blank">
                    <img
                      src={project?.file}
                      alt="image"
                      className="rounded-lg object-cover w-full h-[300px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Business;
