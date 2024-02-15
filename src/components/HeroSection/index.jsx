import Slider from "react-slick";
import { Button, LoadingMode, Skeleton } from "../../components";
import { API_SERVICES_URLS, sliderOpinionsSettings } from "../../data";

import { useSWRHook } from "../../hooks";
import { useTranslation } from "react-i18next";
import { Fragment, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const HeroSection = ({ type }) => {
  const { pathname } = useLocation();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const sliderSettings = {
    ...sliderOpinionsSettings,
    arrows: false,
  };
  const { data: heroData, mutate } = useSWRHook(
    API_SERVICES_URLS.GET_HERO_SECTION_DATA(type)
  );
  useEffect(() => {
    mutate();
  }, [language]);

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <Slider {...sliderSettings}>
      {heroData?.data.length > 0 ? (
        heroData?.data?.map((item) => (
          <Fragment key={item?._id}>
            <div
              className="pt-[60px]  "
              id="heroSection"
              dir={language == "ar" ? "rtl" : "ltr"}
              style={{ backgroundColor: item?.color || "#E5E5E5" }}
            >
              <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8 rtl:text-end min-h-[720px]">
                <div className="flex flex-col md:flex-row gap-4 pt-20 sm:pt-36">
                  <div className=" !select-text	rtl:text-right ltr:text-left break-words flex flex-col gap-5 !pb-[5px] sm:pb-[40px] md:w-[60%]">
                    <h1 className="text-2xl lg:text-4xl mt-5  text-primary font-bold  !leading-relaxed  ">
                      {item?.title}
                    </h1>

                    <p
                      className="block !leading-relaxed text-lg lg:text-xl  text-primary font-medium mb-1"
                      dangerouslySetInnerHTML={createMarkup(item?.content)}
                    />
                    {pathname !== "/packages" && (
                      <span className=" inline-flex ">
                        <NavLink
                          to="/packages"
                          className=" bg-primary text-white text-center p-2 hover:bg-opacity-95 transition-colors w-[100px] rounded-lg mt-5 sm:mt-10 mb-1 md:mb-5 lg:mb-10 2xl:text-lg "
                        >
                          {t("moreButton")}
                        </NavLink>
                      </span>
                    )}
                  </div>

                  <div className=" mx-auto sm:-mt-14 md:w-[47%]">
                    <img src={item?.image} alt="hero" />
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <div
          key={new Date()}
          className=" bg-grayDark pt-[300px]"
          id="heroSection"
        >
          <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4 pt-20 sm:pt-36">
              <LoadingMode className="!bg-grayDark" />
            </div>
          </div>
        </div>
      )}
    </Slider>
  );
};
export default HeroSection;
