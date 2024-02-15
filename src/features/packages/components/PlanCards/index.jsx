import Slider from "react-slick";
import { Card, Button } from "../../../../components";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../utils/SliderButtons/Bottom";
import { sliderPackagesSettings } from "../../../../data/sliderSettingsData";
import { useTranslation } from "react-i18next";

export const PlanCards = ({ data, setPackageDetails }) => {
  const handleShow = (data) => {
    setPackageDetails(() => data);
  };

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const sliderSettings = {
    ...sliderPackagesSettings,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: data?.length > 3,
  };

  return (
    <div className=" mt-10 ">
      <Slider {...sliderSettings} className="[&>.slick-dots]:!bottom-[-42px]">
        {data?.map((plan) => (
          <div
            dir={language == "ar" ? "rtl" : "ltr"}
            key={plan._id}
            className="p-4"
          >
            {plan.isDefault ? (
              <Card className="!bg-primary text-white flex flex-col  rounded-2xl min-h-[345px]">
                <div className="flex justify-between items-center gap-3">
                  <span className="  font-bold pt-2 pb-4 text-2xl">
                    {plan.name}
                  </span>
                  <Button className="!px-5 !pt-1.5 !pb-1 flex items-center !bg-white font-bold text-[11px] !text-black rounded-md">
                    {t("packages.value")}
                  </Button>
                </div>
                <span className=" font-[500]">
                  {plan.price} {t("packages.riyal")} /
                  {language == "ar" ? "شهر" : "month"}
                </span>
                <span className="block mt-1 font-[400]">
                  {plan?.executionTime}
                </span>
                <div className="flex flex-col gap-3  font-[400] pt-5 pb-10  ">
                  {plan?.items?.map((item, index) => (
                    <span key={item + index}>{item}</span>
                  ))}
                </div>

                <a
                  onClick={() => handleShow(plan)}
                  href="#showDetails"
                  className="!mb-0 whitespace-nowrap px-10   md:px-20 font-bold m-auto rounded-lg text-sm py-3 lg:py-3.4 2xl:py-4 !bg-white !text-primary"
                >
                  {t("packages.showDetailsBtn")}
                </a>
              </Card>
            ) : (
              <Card className="flex  flex-col  rounded-2xl min-h-[340px]">
                <span className="text-primary font-bold pt-2 pb-4 text-2xl">
                  {plan.name}
                </span>
                <span className=" font-[500] text-black">
                  {plan.price} {t("packages.riyal")} /{" "}
                  {language == "ar" ? "شهر" : "month"}
                </span>
                <span className="block mt-1 font-[400]">
                  {plan?.executionTime}
                </span>
                <div className="flex flex-col gap-3 text-black font-[400] pt-5 pb-10  ">
                  {plan?.items?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a
                  onClick={() => handleShow(plan)}
                  href="#showDetails"
                  className=" cursor-pointer text-white bg-primary !mb-0 whitespace-nowrap  px-10   md:px-20 font-bold m-auto rounded-lg text-sm py-3 lg:py-3.4 2xl:py-4 "
                >
                  {t("packages.showDetailsBtn")}
                </a>
              </Card>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default PlanCards;
