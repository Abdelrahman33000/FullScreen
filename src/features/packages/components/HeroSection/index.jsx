import Slider from "react-slick";

import { sliderOpinionsSettings } from "../../../../data";
import { Button, LoadingMode } from "../../../../components";

export const HeroSection = ({ data }) => {
  const sliderSettings = {
    ...sliderOpinionsSettings,
    arrows: false,
  };
  return (
    <Slider {...sliderSettings}>
      {data ? (
        <div className=" bg-grayDark pt-[60px]" id="heroSection">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4 pt-20 sm:pt-36">
              <div className=" break-words rtl:order-2 ltr:order-1 flex flex-col gap-5 !pb-[5px] sm:pb-[40px] md:w-[60%]">
                <h4 className="text-2xl lg:text-4xl mt-5  text-primary font-bold  !leading-relaxed  ">
                  {data?.name}
                </h4>
                <p className="block !leading-relaxed text-lg lg:text-xl  text-primary font-medium mb-1">
                  {data?.title}
                </p>

                <span>
                  <Button className="mt-5 sm:mt-10 mb-0 md:mb-5 lg:mb-0">
                    المزيد
                  </Button>
                </span>
              </div>

              <div className="mx-auto rtl:order-1 ltr:order-2 sm:-mt-14 md:w-[47%]">
                <img src={data?.icon} alt="hero" />
              </div>
            </div>
          </div>
        </div>
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
