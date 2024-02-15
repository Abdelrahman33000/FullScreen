import { useParams } from "react-router-dom";
import { Service } from "./components";
import { useSWRHook } from "../../hooks";
import { API_SERVICES_URLS } from "../../data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const ServicesWrapper = () => {
  const { id } = useParams();
  const { data: services, mutate } = useSWRHook(
    API_SERVICES_URLS.GET_SERVICE(id)
  );

  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <div>
      <Service
        data={{
          title: services?.data?.name,
          details: services?.data?.description,
          image: services?.data?.image,
        }}
        firstSection={true}
      />

      {services?.data?.details?.map((service, index) => (
        <Service key={index} data={service} reverse={++index % 2 === 1} />
      ))}
    </div>
  );
};
export default ServicesWrapper;
