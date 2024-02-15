import { useTranslation } from "react-i18next";
import { sliderBusinessSettings } from "../../../../data";
import Slider from "react-slick";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../utils/SliderButtons/Bottom";
export const Stories = () => {
  const { t } = useTranslation();
  const sliderSettings = {
    ...sliderBusinessSettings,
    nextArrow: (
      <SampleNextArrow containerClassName="md:[&>.slick-next]:start-[50%]   [&>.slick-next]:md:ltr:bottom-[100%] " />
    ),
    prevArrow: (
      <SamplePrevArrow containerClassName="md:[&>.slick-prev]:!start-[40%]   [&>.slick-prev]:md:ltr:bottom-[100%]    " />
    ),
  };

  return (
    <div className="bg-secondary  ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  py-20 gap-16 md:gap-24">
          <div>
            <h2 className="text-2xl font-[700]   text-primary mb-0">
              {t("stores.firstList.title")}
            </h2>
            <ul className="text-lg list-disc ms-8 mt-2.5">
              <li className="text-black font-[400]">
                {t("stores.firstList.firstListItem")}
              </li>
              <li className="text-black font-[400]">
                {t("stores.firstList.secListItem")}
              </li>
              <li className="text-black font-[400]">
                {t("stores.firstList.thirdListItem")}
              </li>
              <li className="text-black font-[400]">
                {t("stores.firstList.fourthListItem")}
              </li>
            </ul>

            <h2 className="text-2xl font-[700]   text-primary mb-0 mt-8">
              {t("stores.secList.title")}
            </h2>
            <ul className="text-lg list-disc ltr:ms-8 mt-2.5">
              <ul className="text-lg list-disc mr-8 mt-2.5">
                <li className="text-black font-[400]">
                  {t("stores.secList.firstListItem")}
                </li>
                <li className="text-black font-[400]">
                  {t("stores.secList.secListItem")}
                </li>
                <li className="text-black font-[400]">
                  {t("stores.secList.thirdListItem")}
                </li>
                <li className="text-black font-[400]">
                  {t("stores.secList.fourthListItem")}
                </li>
              </ul>
            </ul>
          </div>
          <Slider {...sliderSettings}>
            <div className="">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VflBoTUNxAM?si=V8Pmqk4sGIiJQy7D"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-md h-[320px] w-full"
              ></iframe>
              <h2 className="text-2xl font-[700] text-center  text-primary mt-7">
                {t("eightSectionTitle")}
              </h2>
            </div>
            <div className="">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQNSzHqPdzs?si=TfOtgzgFTbxynpwv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-md h-[320px] w-full"
              ></iframe>
              <h2 className="text-2xl font-[700] text-center  text-primary mt-7">
                {t("eightSectionTitle")}
              </h2>
            </div>
            <div className="">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/56yrkM6IWU8?si=VVqCRlP84WmV_aUMv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-md h-[320px] w-full"
              ></iframe>
              <h2 className="text-2xl font-[700] text-center  text-primary mt-7">
                {t("eightSectionTitle")}
              </h2>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Stories;
