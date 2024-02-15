import Slider from "react-slick";
import { sliderOpinionsSettings } from "../../../../data/sliderSettingsData";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../utils/SliderButtons/Around";
import { API_SERVICES_URLS } from "../../../../data";
import { useSWRHook } from "../../../../hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Opinions = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const sliderSettings = {
    ...sliderOpinionsSettings,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { data, mutate } = useSWRHook(API_SERVICES_URLS.GET_ALL_TESTIMONIAL);

  useEffect(() => {
    mutate();
  }, [language]);

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    data?.data?.length > 0 && (
      <div className="bg-white pt-[60px] pb-[80px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
          <h2 className="text-2xl font-[700] text-center text-primary mb-7">
            {t("sixSectionTitle")}
          </h2>
          <div className="md:px-10 lg:px-20">
            <Slider {...sliderSettings} className="">
              {data?.data?.map((item) => (
                <div
                  key={item._id}
                  className="bg-secondary !flex flex-col sm:flex-row gap-10 py-14 px-7 rounded-lg"
                >
                  <div className="w-full sm:w-1/4 rounded-lg  order-1  sm:rtl:order-2  sm:ltr:order-1">
                    <img
                      src={item.image}
                      alt="image"
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div
                    dir={language == "ar" ? "rtl" : "ltr"}
                    className=" border-t-2 pt-6 sm:pt-0 sm:border-none w-full sm:w-3/4  order-2 sm:rtl:order-1  sm:ltr:order-2"
                  >
                    <span className="text-primary font-[600]">{item.name}</span>
                    <p className="text-black mt-3 font-[400]">
                      <div
                        dangerouslySetInnerHTML={createMarkup(item?.content)}
                      />
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  );
};
export default Opinions;
