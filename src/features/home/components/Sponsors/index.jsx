import Slider from "react-slick";

import { sliderSponsorsSettings } from "../../../../data/sliderSettingsData";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../utils/SliderButtons/Bottom";
import { useTranslation } from "react-i18next";

export const Sponsors = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    ...sliderSponsorsSettings,
    nextArrow: (
      <SampleNextArrow
        iconClasses="!text-primary !h-7 !w-7  hidden lg:block"
        buttonClasses="!bg-white "
        topPosition="105"
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        iconClasses="!text-primary !h-7 !w-7 hidden lg:block "
        buttonClasses="!bg-white  "
        topPosition="105"
      />
    ),
  };

  return (
    <div className="bg-white pt-[40px] pb-[70px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8 ">
        <h2 className="text-2xl font-[700] text-center text-primary mb-0">
          {t("sevenSectionTitle")}
        </h2>
        <Slider {...sliderSettings}>
          <img src="/sponsor1.svg" alt="sponsor" className="md:p-7 bg-cover " />
          <img
            src="/sponsor2.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor3.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor4.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor7.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor8.svg"
            alt="sponsor"
            className=" lg:p-7 bg-cover  "
          />
          <img
            src="/sponsor9.svg"
            alt="sponsor"
            className="p-6 md:px-[50px] lg:px-[70px] bg-cover "
          />
          <img
            src="/sponsor10.svg"
            alt="sponsor"
            className=" lg:p-7 bg-cover"
          />
          <img
            src="/sponsor11.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover"
          />
          <img
            src="/sponsor12.svg"
            alt="sponsor"
            className="p-5 lg:px-[50px] bg-cover"
          />
          <img
            src="/sponsor13.svg"
            alt="sponsor"
            className="p-7 md:px-[50px] lg:px-[70px] bg-cover"
          />
          <img
            src="/sponsor14.svg"
            alt="sponsor"
            className="p-7  md:px-[50px] lg:px-[70px] bg-cover"
          />
          <img
            src="/sponsor15.svg"
            alt="sponsor"
            className="p-2 lg:p-7 bg-cover"
          />
          <img
            src="/sponsor5.svg"
            alt="sponsor"
            className="p-1   lg:p-7 bg-cover "
          />
          <img
            src="/sponsor6.svg"
            alt="sponsor"
            className="p-1 lg:p-7 bg-cover   "
          />
          <img src="/sponsor1.svg" alt="sponsor" className="md:p-7 bg-cover " />
          <img
            src="/sponsor2.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor3.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor4.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor7.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover "
          />
          <img
            src="/sponsor8.svg"
            alt="sponsor"
            className=" lg:p-7 bg-cover  "
          />
          <img
            src="/sponsor9.svg"
            alt="sponsor"
            className="p-6 md:px-[50px] lg:px-[70px] bg-cover "
          />
          <img
            src="/sponsor10.svg"
            alt="sponsor"
            className=" lg:p-7 bg-cover"
          />
          <img
            src="/sponsor11.svg"
            alt="sponsor"
            className="p-5 lg:p-12 bg-cover"
          />
          <img
            src="/sponsor12.svg"
            alt="sponsor"
            className="p-5 lg:px-[50px] bg-cover"
          />
          <img
            src="/sponsor13.svg"
            alt="sponsor"
            className="p-7 md:px-[50px] lg:px-[70px] bg-cover"
          />
          <img
            src="/sponsor14.svg"
            alt="sponsor"
            className="p-7 md:px-[50px] lg:px-[70px] bg-cover"
          />
          <img
            src="/sponsor15.svg"
            alt="sponsor"
            className="p-2 lg:p-7 bg-cover"
          />
          <img
            src="/sponsor5.svg"
            alt="sponsor"
            className="p-1   lg:p-7 bg-cover "
          />
          <img
            src="/sponsor6.svg"
            alt="sponsor"
            className="p-1 lg:p-7 bg-cover   "
          />
        </Slider>
      </div>
    </div>
  );
};

export default Sponsors;
