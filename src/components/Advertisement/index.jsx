import React, { useEffect } from "react";
import Button from "../Button";
import { useSWRHook } from "../../hooks";
import { useTranslation } from "react-i18next";
import { API_SERVICES_URLS } from "../../data";
import { NavLink } from "react-router-dom";
import Skeleton from "../Skeleton";

export const Advertisement = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    data: advertisementData,
    mutate,
    isLoading,
  } = useSWRHook(API_SERVICES_URLS.GET_ADVERTISEMENT);

  useEffect(() => {
    mutate();
  }, [language]);

  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <>
      {isLoading ? (
        <>
          <Skeleton className="!h-[250px] w-full" />
          <Skeleton className="!w-[200px] mt-10 mb-5 p-5 mx-auto rounded-lg " />
        </>
      ) : (
        <>
          <img
            src={advertisementData?.data?.image}
            className="max-h-[200px] object-cover w-full"
          />
          <div className="text-center pt-8 pb-5 px-10">
            <p
              dangerouslySetInnerHTML={createMarkup(
                advertisementData?.data?.text
              )}
            />
            <NavLink
              to={
                advertisementData?.data?.type == "article"
                  ? `/article-details/${advertisementData?.data?.relatedId}`
                  : `/package-details/${advertisementData?.data?.relatedId}`
              }
              className="bg-primary hover:bg-opacity-95 transition-colors text-white !w-[200px] p-2 rounded-lg   block mx-auto mt-8 text-lg 2xl:text-xl"
            >
              {t("advertisementShow")}{" "}
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Advertisement;
