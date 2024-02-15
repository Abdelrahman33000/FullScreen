import Slider from "react-slick";
import { sliderSettings } from "../../../../data/sliderSettingsData";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Services = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data: services, mutate } = useSWRHook(API_SERVICES_URLS.ALL_SERVICES);

  const settings = {
    ...sliderSettings,
    infinite: services?.data?.length > 4,
  };

  useEffect(() => {
    mutate();
  }, [language]);

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <div className="bg-white pt-[50px] pb-5 lg:pb-[120px]" id="heroSection">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl font-[700] text-center text-primary pb-16">
          {t("fourthSectionTitle")}
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ></ul>
        <div className="bg">
          <Slider {...settings} className="[&>.slick-dots]:!bottom-[-42px]">
            {services?.data?.map((service) => (
              <NavLink
                to={`/services/${service?._id}`}
                key={service._id}
                className="px-4"
              >
                <div className="col-span-1 flex flex-col rounded-2xl    bg-white text-center shadow">
                  <div
                    className="h-[200px] rounded-t-2xl"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="flex flex-col gap-2 p-2 bg-secondary rounded-b-2xl rtl:min-h-[180px] ltr:min-h-[160px]">
                    <span className="text-primary font-bold mt-1">
                      {service.name}
                    </span>
                    <span
                      className="text-black text-sm"
                      dangerouslySetInnerHTML={createMarkup(
                        service?.description
                      )}
                    />
                  </div>
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Services;
